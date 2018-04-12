var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: __dirname,

  entry: [
    path.resolve(__dirname, 'src/index'),
  ],

  output: {
    path: path.resolve('./build/'),
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },

  devtool: '#source-map',

  plugins: [
    new BundleTracker({filename: './webpack-stats.prod.json'}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ], // add all common plugins here

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['env', 'stage-0']
          },
      },

      {
        // https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },

      {
        test: /\.scss$/,
        use: [
        'style-loader',
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      }

    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  mode: 'production'
}
