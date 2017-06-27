import path from 'path'
import webpack from 'webpack'

 export default {
  //devtools: "eval-source-map",
  // the entry file for the bundle
  entry: ['Webpack-hot-middleware/client',
  path.join(__dirname, '/client/main.js'),

 ], // the bundle file we will get in the result
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins:[
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ],

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: ['react-hot-loader','babel-loader']
    }],
  },
  resolve: {
    extensions:['.json','.js']
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
};