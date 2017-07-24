import express from 'express';
import path  from 'path';
import bodyParser from 'body-parser';
import webpack from'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import user  from './routes/index';
import login from './routes/index');
import group from './routes/index');
import messages from './routes/index');
import getmessages from './routes/index';

const app = express();

app.use(bodyParser.json());
app.use('/api/user/signup', user.create);
app.use('/api/user/signin',login.findUser);
app.use('/api/group/creategroup', group.create);
app.use('/api/group/id/messages', messages.create);
app.use('/api/group/:id/messages', getmessages.list);

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
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});