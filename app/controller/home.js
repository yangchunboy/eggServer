const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.success({
      code: 1000,
      data: 'hello world'
    })
  }
}

module.exports = HomeController;