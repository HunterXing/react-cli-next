const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // webpack 配置
  // 入口起点
  entry: './src/index.tsx',
  // 输出
  output: {
    // 输出文件名
    filename: 'scripts/[name].[contenthash].js',
    // 输出路径
    path: resolve(__dirname, '../dist'),
    clean: true, // 打包前清理 dist 文件夹
  },
  // loader 配置
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'less-loader', // Add less-loader for processing Less files
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 小于10kb的图片会被base64处理
            // 优点：减少请求数量
            // 缺点：体积变得更大
            maxSize: 10 * 1024 
          }
        },
        // 图片生成规则
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  // plugins 的配置
  plugins: [
    // 功能：默认会创建一个空的html文件，自动引入打包输出的所有资源（js/css）
    new HtmlWebpackPlugin({
      // 增加一个配置
      // 复制 '../public/index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: resolve(__dirname, '../public/index.html'),
      // 压缩html资源
      // minify: {
      //   collapseWhitespace: true, //去空格
      //   removeComments: true // 去注释
      // }
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
  ],
}