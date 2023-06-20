var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: [
    path.resolve(__dirname, 'src/index'),
  ],

  output: {
    path: path.resolve('./dist/'),
    filename: "seafile-ui.js",
    // sourceMapFilename: 'seafile-ui.map'
  },

  devtool: false,

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
      //new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.prod.json'}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "seafile-ui.css",
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
        MiniCssExtractPlugin.loader,
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
