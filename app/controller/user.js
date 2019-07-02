const Controller = require('egg').Controller;

class UserController extends Controller {
  async insert() {
    const { ctx } = this
    console.log(ctx.model.User)
    const res = await ctx.service.user.insert()
    this.ctx.body = res;
  }

  async getAll() {
    const { ctx } = this
    const userList = await ctx.service.user.getAll()
    this.ctx.body = userList;
  }

  async update() {
    const { ctx } = this
    const { _id } = ctx.request.body
    const res = await ctx.service.user.update({ _id })
    this.ctx.body = res;
  }

}

module.exports = UserController;