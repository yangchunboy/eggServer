const Service = require('egg').Service;

class UserService extends Service {
  async insert({ name, age }) {
    const { User } = this.ctx.model;
    console.log(name, age);
    const res  = await User.create({
      name,
      age
    });
    return res.dataValues;
  }

  async find({ name }) {
    const { User } = this.ctx.model;
    const res = await User.findOne({
      where: {
        name
      }
    });
    // console.log(res);
    // const list = await User.findAll({
    //   where: {
    //     name
    //   }
    // });
    return res;
  }

  async findAll({ name }) {
    const { User } = this.ctx.model;
    const res = await User.findAll({
      where: {
        name
      }
    });
    // console.log(res);
    // const list = await User.findAll({
    //   where: {
    //     name
    //   }
    // });
    return res;
  }

  async update({ name, id }) {
    const { User } = this.ctx.model;
    const res = await User.update({ name }, { where: { id } });
    return res;
  }


  async delete({ id }) {
    const { User } = this.ctx.model;
    const res = await User.update({ isRemoved: true }, { id });
    return res;
  }


}

module.exports = UserService;