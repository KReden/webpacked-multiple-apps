const pathExists = require('path-exists')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function MissingPathExpection(entryPath, outputPath){
  this.entryPath = entryPath
  this.outputPath = outputPath
  this.name = 'MissingPathExpection'
  this.message = 'Missing path or path does not exist'
}

module.exports = (entryPath, outputPath) => {
  if(!pathExists.sync(entryPath)){
    throw new MissingPathExpection(entryPath, outputPath)
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
