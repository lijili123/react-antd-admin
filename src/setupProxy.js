/**
 * Created by Ljili on 2020/8/18.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
//http-proxy-middleware 配置反向代理
module.exports = function(app) {
  app.use(createProxyMiddleware('/api',
    {
      target: 'http://10.1.0.55:8080/',
      changeOrigin: true,
    }
    ));
};