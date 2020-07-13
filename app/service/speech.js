const Service = require('egg').Service

class SpeechService extends Service {
  async insert({
    username,
    phone,
    group,
    address,
    email,
    signPhoto,
    photo,
    audio,
  }) {
    const { Speech } = this.ctx.model
    const res = await Speech.create({
      name: username,
      phone,
      group,
      address,
      email,
      sign_photo_url: signPhoto,
      photo_url: photo,
      audio_url: audio,
      create_at: new Date(),
    })
    return res
  }
}

module.exports = SpeechService
