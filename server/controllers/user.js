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
const validator = require('validator');



module.exports = {
  create(req, res) {
    if(!req.body.name ){

        res.json({message:"name is required"}).status(400);
      }
      else if (!req.body.email ){
        res.json({message:"Email is required"}).status(400);
      }else  if(req.body.isEmail){
        res.json({message:"Invalid email"})
      }
      else if (!req.body.password ){
        res.json({message:"Password is required"}).status(400);
      }else if (!req.body.confirmpassword ){
        res.json({message:"confirmpassword is required"}).status(400);
      }
      else if (req.body.password != req.body.confirmpassword){
        res.json({message:"Please ensure the Password match"})
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
      .catch(error => res.status(401).send(error));
}
}

