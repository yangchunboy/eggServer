const Service = require('egg').Service;

class UserService extends Service {
  async insert(ctx) {
    const { User }  = this.ctx.model
    console.log(this.app.config.keys)
    const data = {
      username: `${new Date().getTime()}`,
      password: '123' 
    }
    // console.log(User)
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2')
    const res = await User.create(data)
    return this.app.config.keys
  }

  async getAll() {
    const { User } = this.ctx.model
    // console.log(User)
    const userList = await User.find()
    // console.log(userList, '$$$$$$$$$$$$$$$$$$$$')
    return userList
  }
}

module.exports = UserService;