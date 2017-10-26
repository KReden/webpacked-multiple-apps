const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    quiet: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
}
