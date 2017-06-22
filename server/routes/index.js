const user = require('../controllers').user;
const group = require('../controllers').group;
const adduser = require('../controllers').adduser;
const messages = require('../controllers').messages;
//const login = require('../controllers').login
const login = require('../controllers/login');
const getmessages = require('../controllers/getmessages');
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to  my user API!',
  }));

  app.post('/api/user/signup', user.create);
  app.post('/api/group/creategroup', group.create);
  app.post('/api/group/id/adduser', adduser.create);
  app.post('/api/group/id/messages', messages.create);
  app.post('/api/user/signin', login.findUser);
  app.get('/api/group/id/messages', getmessages.list);

  
};