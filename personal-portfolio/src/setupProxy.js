const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      headers: {
        Host: 'portfolio-dkvp.onrender.com', // Add this line
      },
    })
  );
};
