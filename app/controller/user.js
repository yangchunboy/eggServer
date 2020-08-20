const Controller = require('egg').Controller;

class UserController extends Controller {
  async insert() {
    const { request } = this.ctx;
    console.log(this.ctx.request.body);
    const { name, age } = request.body;
    const res = await this.service.user.insert({ name, age });
    this.ctx.success({
      data: res
    });
  }

  async find() {
    const { request } = this.ctx;
    const { name } = request.query;
    const res = await this.service.user.find({ name });
    this.ctx.success({
      data: res
    })
  }

  async findAll() {
    const { request } = this.ctx;
    const { name } = request.query;
    const res = await this.service.user.findAll({ name });
    this.ctx.success({
      data: res
    })
  }

  async update() {
    const { request } = this.ctx;
    const { name, id } = request.body;
    const res = await this.service.user.update({ name, id });
    this.ctx.success({
      data: res
    })
  }

  async delete() {
    const { success, request } = this.ctx;
    const { id } = request.body;
    const res = await this.service.user.delete({ id });
    success({
      data: res
    })
  }

}

module.exports = UserController;