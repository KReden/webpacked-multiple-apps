const pathExists = require('path-exists')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (entryPath, outputPath) => {
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
    plugins: [
      new HtmlWebpackPlugin({
        title: '[name]',
        filename: `${outputPath}/index.html`,
      }),
    ],
  }
}
