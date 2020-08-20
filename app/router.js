/**
 * 定义所有的路由
 * @author chuck
 * @date 2019/06/26
 */

module.exports = (app) => {
  const { router, controller } = app;
  const { get, post } = router;
  const { home, user } = controller;



  get('/', home.index);

  post('/api/user/insert', user.insert);
  get('/api/user/find', user.find);
  get('/api/user/findAll', user.findAll);
  post('/api/user/update', user.update);
  post('/api/user/delete', user.delete);

}
