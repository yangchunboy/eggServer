exports.keys = 'chuckboy';

exports.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1/chuck',
    options: {},
  },
};


module.exports = {
  security: {
    csrf: {
      enable: false,
    },
  },
};