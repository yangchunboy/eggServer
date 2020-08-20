module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize
  const User = app.model.define(
    'User',
    {
      name: STRING(50),
      age: INTEGER
    },
    {
      timestamps: true, // 添加create,update,delete时间戳
      freezeTableName: true, // 防止修改表名为复数
      tableName: 'user',
    }
  )
  return User;
}