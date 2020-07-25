const Controller = require('egg').Controller
const axios = require('axios').default
const oss = require('ali-oss')

class HomeController extends Controller {
  async insert() {
    const { ctx, service } = this
    const {
      username,
      phone,
      group,
      address,
      email,
      signPhoto,
      photo,
      audio,
    } = ctx.request.body
    const result = await service.speech.insert({
      username,
      phone,
      group,
      address,
      email,
      signPhoto,
      photo,
      audio,
    })
    ctx.success(result)
  }

  async search() {
    const res = await axios.get(
      'https://apis.map.qq.com/ws/place/v1/suggestion',
      {
        params: {
          key: 'BWQBZ-5XV3K-DJJJK-AAYVB-MJ2T6-V4FHY',
          region: '北京',
          keyword: '美食',
        },
      }
    )
    console.log(res)
    this.ctx.success(res.data)
  }

  async upload() {
    const { body } = this.ctx.request
    const stream = await this.ctx.getFileStream()
    console.log(stream)
    const store = oss({
      accessKeyId: 'LTAI4FkfRD2CECWX58vwwZxsa',
      accessKeySecret: 'zPEgeFA5dusnHkJ8CfBma85X9f14YYb',
      bucket: 'school-adminc',
      endpoint: 'oss-cn-beijing.aliyuncs.comd',
      region: 'oss-cn-beijinge',
    })
    const result = await store.put('test', stream)
    // const result = await store.listBuckets()
    console.log(result)
    // 'object'表示上传到OSS的object名称，'localfile'表示本地文件或者文件路径。
    // let r1 = await client.put('object', stream)
    // console.log('put success: %j', r1)
    // let r2 = await client.get('object')
    // console.log('get success: %j', r2)

    this.ctx.success(result)
  }
}

module.exports = HomeController
