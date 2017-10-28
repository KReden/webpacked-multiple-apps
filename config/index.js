'use strict'
// Add App names to apps/appsManifest
const appManifest = require('./apps/appsManifest')
const apps = []
const env = process.env.NODE_ENV

appManifest.appNames.forEach((appName) => {
  apps.push(require(`./apps/webpack.${appName}.config`)(env, appName))
})

module.exports = apps
