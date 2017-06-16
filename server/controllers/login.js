/*const login = require('../models').user;

module.exports = {
  create(req, res) {
    return login
      .list({
        name: req.body.name,
        password: req.body.password,
      
      })
      .all()
      .then(login => res.status(201).send(login))
      .catch(error => res.status(400).send(error));

  },
};*/