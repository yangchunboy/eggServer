/**
 * 定义所有的路由
 * @author chuck
 * @date 2019/06/26
 */

module.exports = (app) => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/api/a/b', controller.home.index)

  // speech
  router.post('/api/speech/insert', controller.speech.insert)

  router.get('/api/map/search', controller.speech.search)

  router.post('/api/oss/upload', controller.speech.upload)
}
