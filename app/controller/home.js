const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.success({
      code: 1000,
      data: 'hello world'
    })
  }

  async post() {
    console.log(this.ctx.request.body);
    this.ctx.success({
      code: 1000,
      data: '这是一个post请求'
    })
  }

}

module.exports = HomeController;