import express from 'express';
import path  from 'path';

import webpack from'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
let app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(webpackHotMiddleware(compiler,{

hot: true,
publicPath: webpackConfig.output.publicPath,
noInfo: true,
}));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
  });
  app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000 or http://127.0.0.1:8000');
});