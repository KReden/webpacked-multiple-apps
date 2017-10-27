# webpacked-multiple-apps
A test proving out a build pipeline for multiple apps via webpack.

# Instructions
- Add app folder to `./apps/`. The name of the app folder should be the name of the app i.e. `./apps/app3/`
- Add app webpack config to `./config/apps/`.
  - This file should be named like so `webpack.<appName>.config.js`
- Add the app name to the appNames array in `./config/appsManifest.js`
- In your terminal run `yarn build` or `npm build`. This will build all apps
  - Running `yarn build -- --a=<appName>` or `npm build -- --a=<appName>` will build only the app named.
  - You may add more apps via the `--a` arg i.e. `yarn build -- --a=app1 --a=app2` and it will build those apps named.
