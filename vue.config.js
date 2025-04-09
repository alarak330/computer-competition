const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },

  devServer: {
    open: false, //是否自动弹出浏览器页面
    // host: "localhost", //表示启动的时候使用的域名，默认可以不写，则是使用localhost和本机IP
    // port: '8081', // 设置端口号
    // https: false,  //是否使用https协议
    hot: true , //是否开启热更新

    //  本地 开发
    proxy: {
      '/api': {
          target: 'http://172.16.3.151:8005/', //API服务器的地址
          ws: true,
          changeOrigin: true, 
          pathRewrite: {
              '^/api5': '/api',
              '^/api': '',
          }
      }
  },

},











}
