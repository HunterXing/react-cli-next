// 所有环境配置的入口文件
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')

module.exports = (env) => {
  switch(true) {
    case env.development:
      return merge(commonConfig, developmentConfig)

    case env.production:
      return merge(commonConfig, productionConfig)

    defult:
      return new Error('No matching configuration was found')
  }
}