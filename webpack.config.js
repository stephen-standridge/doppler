module.exports = {
  entry: './source/Initializer',
  output: {
    path: __dirname + '/public',
    publicPath:"/public/",
    filename: 'bundle.js',
    libraryTarget: "var",
    library: "Doppler"
  },
  module: {
	  rules: [
	    {
	      test: /\.js?$/,
	      exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": ["es2015"]
          }
        }]
	    },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": ["es2015", "react"]
          }
        }]
      }
	  ]
  },
  devServer: {
    contentBase: './',
    noInfo: true,
    open: true,
    port: 8888,
    historyApiFallback: {
      index: './index.html'
    },
    inline: true
  }
};
