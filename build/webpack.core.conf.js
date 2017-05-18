var webpack = require('webpack')
var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var opt = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'vue-hdialog',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('node_modules')]
      }
    ]
  }
}

var compiler = webpack(opt)
compiler.run(function(err, state) {
  console.log(err)
})
