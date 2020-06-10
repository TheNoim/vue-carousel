const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'vue-carousel.ssr.min.js'
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false
    })
  ]
});
