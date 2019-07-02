module.exports = {
  keys: 'chuckboy',
  mongoose: {
    client: {
      url: 'mongodb://127.0.0.1:27017/chuck',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      plugins: [],
    },
  },
  security: {
    csrf: {
      enable: true,
      headerName: 'x-csrf-token'
    },
  }
}

