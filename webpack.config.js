var webpackConfig = {
  context: __dirname + "/dev",
  entry: "./entry",
  output: {
    path: __dirname + "/js",
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};

module.exports =  webpackConfig;
