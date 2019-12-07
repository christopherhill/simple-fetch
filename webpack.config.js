const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'http.js',
    library: 'http',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.ts?$/, exclude: /node_modules/, use: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  externals: {
    'whatwg-fetch': {
      commonjs: 'whatwg-fetch',
      commonjs2: 'whatwg-fetch',
      amd: 'whatwg-fetch',
      root: 'whatwg-fetch',
    },
  },
}
