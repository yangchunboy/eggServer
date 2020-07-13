const Controller = require('egg').Controller

class HomeController extends Controller {
  async insert() {
    const { ctx, service } = this
    const {
      username,
      phone,
      group,
      address,
      email,
      signPhoto,
      photo,
      audio,
    } = ctx.request.body
    const result = await service.speech.insert({
      username,
      phone,
      group,
      address,
      email,
      signPhoto,
      photo,
      audio,
    })
    ctx.success(result)
  }
}

module.exports = HomeController
