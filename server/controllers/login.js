// Method to sign in a user
const user = require('../models').user;
//const login = require('../controllers/login');
  module.exports = {
  findUser(req, res){
    user.findOne({
      where: {
        name: req.body.name
      },
    })
    .then((user, err) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, message: 'Invalid username or password.' });
      } else if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // if user is found and password is right, create a token
          const token = jwt.sign({ data: user }, process.env.TOKEN_SECRET, { expiresIn: 1440 });

          // return the information including token as JSON
          res.status(201).send({
            success: true,
            message: 'User successfully logged in.',
            token
          });
        } else {
          res.status(401).send({ success: false, message: 'Invalid username or password.' });
        }
      }
    });
  },
}