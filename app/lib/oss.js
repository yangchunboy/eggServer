'use strict'

const crypto = require('crypto')
const path = require('path')

class Oss {
  constructor(opt) {
    this.policy = opt.policy
    this.signature = opt.signature
    this.id = opt.id
    this.secret = opt.secret
    this.bucket = opt.bucket
  }

  // 对policy签名
  _simpleSign(policy = {}) {
    const base64policy = toBase64(JSON.stringify(policy))

    const signature = signatureString(base64policy, this.secret)
    return {
      sign: signature,
      policy: base64policy,
      id: this.id,
    }
  }

  // 获取上传路径
  _getCloudPath(pathname) {
    const { name, dir, ext } = path.parse(pathname)

    const now = String(+new Date()).slice(0, -3)
    const filename = name + `_${now}_${random()}` + ext
    return path.join(dir, filename)
  }

  /**
   * 上传签名
   *
   * @param {*} path
   * @param {*} bucket
   * @param {*} [policy={}]
   * @returns
   * @memberof OssRpc
   */
  signOne(path, bucket, policyOpt = {}) {
    const that = this
    bucket = bucket || this.bucket

    // 处理数组
    if (path instanceof Array) {
      return path.map((p) => {
        return that.signOne(p, bucket, policyOpt)
      })
    }

    if (typeof path !== 'string') {
      throw new ComError('INVALID_PARAMS', 'Path must be string')
    }

    // 默认时效
    const defaultDuration = 60 * 1000
    const cloudKey = this._getCloudPath(path)
    const composedPolicy = Object.assign(
      {
        expiration: new Date(Date.now() + defaultDuration).toISOString(),
        conditions: [{ bucket }, ['eq', '$key', cloudKey]],
      },
      policyOpt
    )

    const signObject = this._simpleSign(composedPolicy)
    const { sign, policy, id } = signObject

    return {
      Signature: sign,
      policy,
      ossId: id,
      key: cloudKey,
    }
  }

  /**
   *
   * @param {String} path 上传路径
   * @param {String} bucket 上传bucket
   * @param {Object} policyOpt
   */
  uploadSign(path, bucket, policyOpt = {}) {
    if (typeof bucket === 'object') {
      policyOpt = bucket
      bucket = this.bucket
    }
    if (!bucket) {
      bucket = this.bucket
    }

    return this.signOne(path, bucket, policyOpt)
  }
}

module.exports = Oss

/**
 * buffer to base64
 * @param {Array} obj
 * @return string
 * @private
 */
function toBase64(obj) {
  return new Buffer(obj).toString('base64')
}

/**
 * signature string
 * @param {string} stringToSign
 * @param {string} accessKeySecret
 * @return {string}
 * @private
 */
function signatureString(stringToSign, accessKeySecret) {
  var signature = crypto.createHmac('sha1', accessKeySecret)
  signature = signature
    .update(new Buffer(stringToSign, 'utf8'))
    .digest('base64')

  return signature
}

/**
 * 产生随机数
 */
function random() {
  return Math.random().toString(36).substring(2)
}
