const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('../webpack.base.config')
const developmentConfig = require('../webpack.dev.config')
const productionConfig = require('../webpack.prod.config')
const parts = require('../webpack.parts')

const PATHS = {
  app: path.join(__dirname, '../../apps/app2/main.js'),
  build: path.join(__dirname, '../../dist/app2'),
}

module.exports = (env, name) => {
  // Need to use app manifest and pass it down.
  // It will contain all the relavent info for a given app.
  if(env === 'production'){
    return merge(webpackBaseConfig(PATHS.app, PATHS.build, name), productionConfig(PATHS.build))
  }
  return merge(developmentConfig, parts.esLint({ include: PATHS.app }), webpackBaseConfig(PATHS.app, PATHS.build))
}
