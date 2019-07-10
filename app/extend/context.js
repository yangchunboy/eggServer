/**
 * 默认this就是ctx
 * 这里写的函数可以直接再其他页面用ctx获取到
 */

module.exports = {
  success(data) {
    const ctx = this
    ctx.response.body = {
      data,
      success: true
    }
  },
  error() {
    const ctx = this
    ctx.response.status = 400
    ctx.response.body = "400错误"
  }
}