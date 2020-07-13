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
}
