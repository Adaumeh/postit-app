
import express from 'express';
import Validator from'validator';
import isEmpty from 'loadash/isEmpty';

//let router = express.Router();
module.exports = (app) =>{
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to  my user API!',
  }));

  app.post('/api/user/signup', user.create);
    
}