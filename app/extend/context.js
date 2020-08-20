/**
 * 默认this就是ctx
 * 这里写的函数可以直接再其他页面用ctx获取到
 */

const errorCode = require('../lib/errorCode');

module.exports = {
  success({ code = 1000, data = "success" }) {
    const ctx = this
    let success = true;
    if (code !== 1000) {
      data = 'fail';
      success = false;
    }
    ctx.response.body = {
      code ,
      data,
      success,
      message: errorCode[code]
    }
  },
  error() {
    const ctx = this
    ctx.response.status = 400
    ctx.response.body = "400错误"
  }
}