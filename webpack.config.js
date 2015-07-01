var webpack = require("webpack")

module.exports = {
  devtool: "source-map",

  entry: [
    "webpack/hot/only-dev-server",
    "./src/app.js"
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          "react-hot",
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader",
          "cssnext-loader"
        ]
      },
      {
        test: /\.(svg|png|jpg|woff|woff2)$/,
        loaders: [
          "url-loader?limit=100000"
        ]
      }
    ]
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
