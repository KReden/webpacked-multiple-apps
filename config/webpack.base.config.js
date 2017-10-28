const pathExists = require('path-exists')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const vueLoaderConfig = require('./vue-loader.config')
const utils = require('./utils')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = (entryPath, outputPath, name) => {
  if(!pathExists.sync(entryPath)){
    throw `Entry Path does not exist: ${entryPath}`
  }

  return {
    entry: {
      app: entryPath,
    },
    output: {
      path: outputPath,
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig,
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve(`apps/${name}`)],
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve(`apps/${name}`),
      },
    },
    plugins: [
      new ExtractTextPlugin({
        filename: utils.assetsPath('css/[name].[contenthash].css'),
      }),
      new HtmlWebpackPlugin({
        filename: `${outputPath}/index.html`,
        template: 'index.html',
        inject: true,
      }),
    ],
  }
}
