var path = require('path');

module.exports = {
  entry: {
    app: "./library.js"
  },
  frameworks: ['webpack'],
  output: {
    path: path.resolve('dist'),
    filename: 'angular2-meteor-client.bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',

        compilerOptions: {
          module: "commonjs",
          sourceMap: true
        },
        include: path.resolve('.'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.webpack.js', '.web.js']
  }
};
