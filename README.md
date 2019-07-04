# eggServer
利用egg.js搭建的rest api的脚手架

## 使用方法
先安装npm包，然后直接执行

```javascript
  npm install

  npm run dev
```

## 文件目录结构

[目录结构见egg官网的目录结构](https://eggjs.org/zh-cn/basics/structure.html)

## 数据库

数据库使用的是MongoDB，连接数据库使用的mongoose

[mongoose官方文档](https://mongoosejs.com/docs/guides.html)

[egg连接MongoDB用的库](https://github.com/eggjs/egg-mongoose)

里面设置数据库连接，表的schema验证，还有查询和更新语句


## 其他

1. 有CSRF验证
2. 可以使用session和cookie
3. 封装了定时任务


## 参考文献
- [egg.js官网](https://eggjs.org/zh-cn/intro/)
- [mongoose官网](https://mongoosejs.com/docs/guides.html)
- [egg-mongoose](https://github.com/eggjs/egg-mongoose)
