/**
 * 定义所有的路由
 * @author chuck
 * @date 2019/06/26
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/a/b', controller.home.index);

  // user
  router.post('/api/user/insert', controller.user.insert)
  router.get('/api/user/getAll', controller.user.getAll)
  router.post('/api/user/update', controller.user.update)
  router.get('/api/user/helper', controller.user.helper)
};