'use strict'
process.env.NODE_ENV = 'production'

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const args = require('./config/yargsConfig')
// Load either specific app webpack config or all based on passed in args ('appName', 'all')
const webpackConfig = getConfigForArgs(args)

const spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: true,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})

function getConfigForArgs(yargs){
  if(yargs.appName && typeof(yargs.appName) === 'string'){
    return require(`./config/apps/webpack.${yargs.appName}.config.js`)()
  }else if(yargs.appName && typeof(yargs.appName) !== 'string'){
    return getConfigsForApps(yargs.appName)
  }
  return require("./webpack.config.js")
}

function getConfigsForApps(appNames) {
  let configs = []
  appNames.forEach(name => {
    configs.push(require(`./config/apps/webpack.${name}.config.js`)())
  })
  return configs
}
