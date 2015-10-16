var webpackConfig = {
  context: __dirname + '/dev',
  entry: './entry',
  output: {
    path: __dirname + '/js',
    filename: 'main.js'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ],
  }
};

module.exports =  webpackConfig;
