const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', 

  entry: {
    index: './index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "lib"),
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['lib'])
  ]
}