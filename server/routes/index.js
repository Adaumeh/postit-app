const user = require('../controllers').user;
const group = require('../controllers').group;



module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the my user API!',
  }));

  app.post('/api/user', user.create);
  app.post('/api/group', group.create);

  
};