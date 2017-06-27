import path from 'path'


 export default {
  devtools: "eval-source-map",
  // the entry file for the bundle
  entry: {path.join(__dirname, '/client/main.js'),

  // the bundle file we will get in the result
  output: {
    path: '/'
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: ['babel']
    }],
  },
  resolve: {
    extensions:['','.js']
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
};