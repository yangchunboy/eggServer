const Controller = require('egg').Controller;

class UserController extends Controller {
  async insert() {
    const { ctx } = this
    console.log(ctx.model.User)
    const res = await ctx.service.user.insert()
    ctx.success(userList)
  }

  async getAll() {
    const { ctx } = this
    const userList = await ctx.service.user.getAll()
    ctx.success(userList)
  }

  async update() {
    const { ctx } = this
    const { _id } = ctx.request.body
    const res = await ctx.service.user.update({ _id })
    ctx.success(res)
  }

  async helper() {
    const { ctx } = this
    const { getDate } = ctx.helper
    ctx.error(getDate())
    // console.log()
  }
}

module.exports = UserController;