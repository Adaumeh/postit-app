const user = require('../controllers').user;
const group = require('../controllers').group;
const adduser = require('../controllers').adduser;
const messages = require('../controllers').messages;
//const login = require('../controllers').login
const login = require('../controllers/login');
const getmessages = require('../controllers/getmessages');
const jwt= require('jsonwebtoken');
const secret = "drtguug8*werty+uifghyu"
const authenticate = require('../middlewares/authenticate');
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to  my user API!',
  }));

app.post('/api/user/signup', user.create);
  app.post('/api/user/signin', login.findUser);

  app.use(function(req, res, next) {
   //const authorizationHeader = req.headers['Authorization'];
   const token = req.body.token || req.params.token || req.headers['authorization'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'secret', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;   
        next();
      }
    });

  } else {
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
  
  app.post('/api/group/creategroup',group.create);
  app.post('/api/group/id/adduser', adduser.create);
  app.post('/api/group/id/messages', messages.create);
  
  app.get('/api/group/:id/messages', getmessages.list);

  });
};

