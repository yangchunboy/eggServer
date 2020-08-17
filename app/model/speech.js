module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Speech = app.model.define(
    'Speech',
    {
      name: STRING,
      group: STRING,
      phone: STRING,
      address: STRING,
      email: STRING,
      signPhotoUrl: STRING,
      photoUrl: STRING,
      audioUrl: {
        type: STRING,
        // 可以重写某个字段的字段名
        field: 'audioUrl',
        allowNull: false,
        defaultValue: '',
      }
    },
    {
      timestamps: true, // 添加create,update,delete时间戳
      freezeTableName: true, // 防止修改表名为复数
      tableName: 'speech',
      underscored: true, // 防止驼峰式字段被默认转为下划线
    }
  )

  return Speech
}
