import path from 'path'
import webpack from 'webpack'

 export default {
  devtool: "eval-source-map",
  // the entry file for the bundle
  entry: [
  'webpack-hot-middleware/client',
  path.join(__dirname, '/client/index.js'),

 ], // the bundle file we will get in the result
  output: {
    path: '/'
  //path: path.resolve(__dirname, '/dist/bundle.js'),
  //filename: 'bundle.js',
  publicPath: '/'
},

  //output: {
   // path: '/',
    //publicPath: '/dist/'
 // },
  plugins:[
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ],

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.js?$/,
      include: path.join(__dirname, 'client'),
      loaders: ['react-hot-loader' ,'babel-loader']
    }],
  },
  resolve: {
    extensions:['.js','.jsx']
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
 watch: true
};