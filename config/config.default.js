module.exports = {
  keys: 'chuckboy',
  sequelize: {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'test',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 's121477964',
    define: {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
    },
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  },
  // middleware: [ 'validateSign' ],
  signSecret: 'testSecret',
  security: {
    csrf: {
      enable: false,
      headerName: 'x-csrf-token',
    },
    domainWhiteList: ['*'],
  },
  cors: {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  },
  multipart: {
    fileSize: '1024000mb',
    whitelist: [
      // images
      '.jpg',
      '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
      '.gif', // image/gif
      '.bmp', // image/bmp
      '.wbmp', // image/vnd.wap.wbmp
      '.webp',
      '.tif',
      '.psd',
      // text
      '.svg',
      '.js',
      '.jsx',
      '.json',
      '.css',
      '.less',
      '.html',
      '.htm',
      '.xml',
      // tar
      '.zip',
      '.gz',
      '.tgz',
      '.gzip',
      // video
      '.mp3',
      '.mp4',
      '.avi',
    ],
  },
  oss: {
    policy: '',
    signature: '',
    id: 'LTAI4FkfRD2CECWX58vwwZxs', 
    secret: 'zPEgeFA5dusnHkJ8CfBma85X9f14YY',
    bucket: 'school-admin',
  },
}
