var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + 'src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  loaders: [
    {test: /\.js$/, exclude: /node_modules/, loader="babel-loader"}
  ],
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPlugin]
};
