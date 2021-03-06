import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'appSrc/index')
  ],
  target: 'web',
  node: {
      fs: "empty"
  },
  output: {
    path: path.resolve(__dirname, 'appSrc'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['css']}
    ]
  }
}