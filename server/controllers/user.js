const usercontroller = require('../models').user;
const express = require('express');

const bcrypt = require('bcrypt');

const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

const jwt = require("jsonwebtoken"); 

const secret = "drtguug8*werty+uifghyu"
const password = 's0/\/\P4$$w0rD';
const confirmpassword = 's0/\/\P4$$w0rD';
const hash = bcrypt.hashSync(password, saltRounds);

const Validator = require('validator');


let router = express.Router();
function validateInput(data,otherValidations){
  let {errors} = otherValidations(data);
return Promise.all([user.where({email:data.email}).fetch().then(user =>{
  if(user) {errors.email = 'There is a user with such email';}
}),
user.where({name: data.name}).fetch().then(user =>{

  if(user) {errors.name = 'There is user with such name';}
})

]).then(() => {
  return{
    errors,
    isValid: isEmpty(errors)
  };
});
}

module.exports = {
  create(req, res) {
    if(!req.body.name ){

        res.json({message:"name is required"}).status(400);
      }
      else if (!req.body.email ){
        res.json({message:"Email is required"}).status(400);
      }

      else if (!req.body.password ){
        res.json({message:"Password is required"}).status(400);
      }else if (!req.body.confirmpassword ){
        res.json({message:"confirmpassword is required"}).status(400);
      }
      else if (req.body.password != req.body.confirmpassword){
        res.json({message:"Please ensure the Password match"}).status(400)
      }
      else if(req.body.name .exist ){

        res.json({message:"name is already in use"}).status(400);
      }
    return usercontroller
      .create({
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password,salt),
        confirmpassword:bcrypt.hashSync(req.body.confirmpassword,salt),
        email: req.body.email,
        phone: req.body.phone
      })

      .then(user => res.status(200).send('user successfully created'))
      .catch(error => res.status(400).send(error));
}
}

