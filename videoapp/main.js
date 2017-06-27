const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.dev.js')


app.use(webpackMiddleware(webpack(webpackConfig)));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
  });
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});