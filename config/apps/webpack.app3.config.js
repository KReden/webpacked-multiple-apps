const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('../webpack.base.config')
const developmentConfig = require('../webpack.dev.config')
const productionConfig = require('../webpack.prod.config')
const parts = require('../webpack.parts')

const PATHS = {
  app: path.join(__dirname, '../../apps/app3/main.js'),
  build: path.join(__dirname, '../../dist/app3'),
}

module.exports = (env) => {
  if(env === 'production'){
    return merge(productionConfig, webpackBaseConfig(PATHS.app, PATHS.build))
  }
  return merge(developmentConfig, parts.esLint({ include: PATHS.app }), webpackBaseConfig(PATHS.app, PATHS.build))
}
