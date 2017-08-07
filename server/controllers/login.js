


// Method to sign in a user
const user = require('../models').user;
const login = require('../../app');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

const jwt = require("jsonwebtoken"); 

const secret = "drtguug8*werty+uifghyu"
const password = 's0/\/\P4$$w0rD';
const confirmpassword = 's0/\/\P4$$w0rD';
const hash = bcrypt.hashSync(password, saltRounds);

//const login = require('../controllers/user');
  module.exports = {
  findUser(req, res){
    user.findOne({
      where: {
        name: req.body.name, 
        email:req.body.email,
      
      },
    })
    .then((user, err) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, message: 'Invalid credentials' });
 
      } else if(user){
        if (bcrypt.compareSync(req.body.password,user.password)) {
        res.json({ success: false, message: 'Authentication failed.' });
      } else {

        // if user is found and password is right
        // create a token
        const token = jwt.sign({data:user}, 'secret',{expiresIn: 8640});

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

  }
});
}
}