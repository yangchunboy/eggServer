module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Speech = app.model.define(
    'speech',
    {
      name: STRING,
      group: STRING,
      phone: STRING,
      address: STRING,
      email: STRING,
      sign_photo_url: STRING,
      photo_url: STRING,
      audio_url: STRING,
      create_at: DATE,
    },
    {
      tableName: 'speech',
    }
  )

  return Speech
}
