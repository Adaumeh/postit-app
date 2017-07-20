const express = require('express');
const user = require('../controllers').user;
const group = require('../controllers').group;
const adduser = require('../controllers').adduser;
const messages = require('../controllers').messages;
//const login = require('../controllers').login
const login = require('../controllers/login');
const getmessages = require('../controllers/getmessages');
const jwt = require('jsonwebtoken');
const secret = "drtguug8*werty+uifghyu"
const authenticate require('../middlewares/authenticate');




app.post('/api/user/signup', user.create);
  app.post('/api/user/signin', login.findUser);

  app.use(function(req, res, next) {
   const authorizationHeader = req.headers['Authorization'];
   let token = req.body.token || req.params.token || req.headers['token'];
	
	if(authorizationHeader){
		token = authorizationHeader.split('')[1];
	}
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
        success: true, 
        message: 'No token provided.' 
    });

  }

 
  app.post('/api/group/creategroup',authenticate,(group.create) =>{
       res.status(201).json({success:true});
       }););

  app.post('/api/group/id/adduser', authenticate,(adduser.create));
  app.post('/api/group/id/messages', authenticate,(messages.create));
  
  app.get('/api/group/:id/messages', authenticate,(getmessages.list));

  
});
}