const proxy = require('http-proxy-middleware');

module.exports = function (app: any) {
  app.use(proxy('/api', { target: 'https://h5.jizhen.cool' }));
};
