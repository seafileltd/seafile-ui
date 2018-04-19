var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: [
    require.resolve('webpack-dev-server/client') + '?http://localhost:3000',
    require.resolve('webpack/hot/only-dev-server'),
    path.resolve(__dirname, 'src/index'),
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    path: path.resolve('./dist/'),
    // filename: "[name]-[hash].js",
    // sourceMapFilename: '[name]-[hash].map'
    filename: "seafile-ui.js",
    sourceMapFilename: 'seafile-ui.map',
    // tell WebpackDevServer to serve bundle.js from http://localhost:3000/build/bundle.js
    publicPath: 'http://localhost:3000/',
  },

  devtool: '#source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0']
        },
     },

      {
        // https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a
        test:/\.css$/,
        use:['style-loader','css-loader']
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

  context: __dirname,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
   // new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.dev.json'}),
  ],

  // watch: true, // boolean
  // mode: "development",
  // watchOptions: {
  //   aggregateTimeout: 500, //Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other changes made during this time period into one rebuild. Pass a value in milliseconds
//   ignored: /node_modules/
// }

  mode: 'development'
}
