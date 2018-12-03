var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'http.js',
    library: 'http',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  externals: {
    'whatwg-fetch': {
      commonjs: 'whatwg-fetch',
      commonjs2: 'whatwg-fetch',
      amd: 'whatwg-fetch',
      root: 'whatwg-fetch'
    }
  }
};
