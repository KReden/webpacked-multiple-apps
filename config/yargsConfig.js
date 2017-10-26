'use strict'
const appNames = require('./apps/appsManifest').appNames

module.exports = require('yargs')
  .option('appName', {
    alias: 'a',
    describe: 'Choose an app to build. Using this flag multiple times will run multiple apps (i.e -a=app1 -a=app2). Omitting this flag will build all apps.',
    choices: appNames,
  }).help().argv
