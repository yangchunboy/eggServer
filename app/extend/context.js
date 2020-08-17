/**
 * 默认this就是ctx
 * 这里写的函数可以直接再其他页面用ctx获取到
 */

const errorCode = require('../lib/errorCode');

module.exports = {
  success({ code, data }) {
    const ctx = this
    ctx.response.body = {
      code,
      data,
      success: true,
      message: errorCode[code]
    }
  },
  error() {
    const ctx = this
    ctx.response.status = 400
    ctx.response.body = "400错误"
  }
}