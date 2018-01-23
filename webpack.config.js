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
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      sagas: path.resolve(__dirname, 'src/sagas')
    }
  },
  devtool: 'inline-source-map'
}
