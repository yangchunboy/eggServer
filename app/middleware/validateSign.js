var MD5 = require('md5');


module.exports = (options) => {
  return async function validateeSign(ctx, next) {
    const { method, body, query } = ctx.request;
    const { signSecret } = ctx.app.config;
    console.log(signSecret, body);
    let params = body;
    if (method === 'GET') {
      params = query
    }
    const requestSign = params.sign;
    delete params.sign;
    // 生成签名的方法
    const generateSign = ({ secret, data }) => {
      let str = '';
      for (const key in data) {
        str = `${str}&${key}=${data[key]}`;
      }
      str = str.substring(1, str.length);
      str = str.split('&').sort().join('&');
      const stringSignTemp = `${str}&key=${secret}`;
      const sign = MD5(stringSignTemp).toUpperCase();
      return sign;
    };

    const sign = generateSign({ signSecret, data: params });
    if(sign !== requestSign) {
      ctx.success({
        code: 1003,
        data: 'success'
      })
    } else {
      await next();
    }


  }
} 