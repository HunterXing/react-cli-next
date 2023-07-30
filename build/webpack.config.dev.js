module.exports = {
  mode: 'development',
  module: {
    rules: [
      
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: '../dist', // 将 ../dist 目录下的文件作为 web 服务的根目录。
    compress: true,
    port : 3000, // 设置端口号
    open : true, // 自动打开本地默认浏览器
    hot: true, // 开启热更新
    proxy: {
      // 代理到后端的服务地址，会拦截所有以 '/api' 开头的请求地址。自行修改此处
      // '/api': {
      //   target: 'http://localhost:3010',
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // }
    },
    historyApiFallback: true
  }
}