'use strict'
// Add App names to apps/appsManifest
const appNames = require('./apps/appsManifest').appNames
const apps = []

appNames.forEach((appName) => {
  apps.push(require(`./apps/webpack.${appName}.config`)())
})

module.exports = apps
