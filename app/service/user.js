const Service = require('egg').Service;

class HomeService extends Service {
  async insert() {
    const { User } = this.ctx.model
    const data = {
      username: `${new Date().getTime()}`,
      password: '123'
    }
    const res = await User.create(data)
    return res
  }

  async getAll() {
    const { User } = this.ctx.model
    const userList = await User.find()
    return userList
  }
}

module.exports = HomeService;