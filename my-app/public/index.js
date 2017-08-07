import express from 'express';
import path  from 'path';
import bodyParser from 'body-parser';
import webpack from'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import user from './routes/index';
const app = express();
app.use('/api/user/signup', user.create);
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(webpackHotMiddleware(compiler,{

hot: true,
publicPath: webpackConfig.output.publicPath,
noInfo: true,
}));
//app.get('/*',(req,res) =>{
	//res.send('hello my post it app');
//});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
  });
  app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000 or http://127.0.0.1:5000');
});