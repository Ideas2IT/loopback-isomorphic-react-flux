var webpack = require('webpack');

module.exports = {  
  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client/app.js',
  ],
  output: {
    path: __dirname + '/public/assets/',
    filename: 'bundle.js',
    publicPath: '/public/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.react.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
    ]
  }
};
