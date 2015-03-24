var webpack = require("webpack");

module.exports = {
  entry: ['./src/app.jsx.coffee'],

  output: {
    path: __dirname + "/dist/js/",

    filename: 'bundle.[hash].js',


    sourceMapFilename: '[file].map'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.jsx.coffee', '.coffee']
  },

  module: {
    loaders: [
      { test: /\.jsx.coffee$/, loader: 'babel!coffee', exclude: /node_modules/ },
      { test: /\.coffee$/, exclude: /\.jsx.coffee$|node_modules/, loader: 'coffee-loader' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules|rollbar|mixpanel/ },
      { test: /\.json$/, loader: "json" }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  // devtool: "eval-source-map"
  devtool: "source-map",

  // Grunt specifics
  storeStatsTo: "webpackStats",
  failOnError: true

};
