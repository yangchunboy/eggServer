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
      signPhotoUrl: signPhoto,
      photoUrl: photo,
      audioUrl: audio
    })
    return res
  }
}

module.exports = SpeechService
