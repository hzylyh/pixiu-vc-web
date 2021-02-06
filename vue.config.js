/*
 * @Description: 
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-02-06 15:14:44
 * @LastEditors: John Holl
 */

module.exports = {
  lintOnSave: false,
  publicPath: './', // vueConf.baseUrl, // 根域上下文目录

  // assetsDir: 'static',
  // 选项...
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    proxy: {
      // 配置跨域
      '/api/': {
        target: 'http://192.168.1.169:3000',
        ws: false,
        pathRewrite: {
          '^/': '/'
        }
      },
    }
  },
}
