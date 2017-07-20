const user = require('../controllers').user;
import express from 'express';
import Validator from'validator';
import isEmpty from 'loadash/isEmpty';

let router = express.Router();
  router.post('/api/user/signup', (req,res) =>{
  	console.log(req.body)

  	}); export default router;
  