const path = require('path')

module.exports = {
  entry: {
    index: './src/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map'
}
