const usercontroller = require('../models').user;

module.exports = {
  create(req, res) {
    if(!req.body.name ){
        res.json({message:"username is required"})
      }
      else if (!req.body.email ){
        res.json({message:"Email is required"})
      }
      else if (!req.body.password ){
        res.json({message:"Password is required"})
      }
      else if (req.body.password != req.body.confirmpassword){
        res.json({message:"Please ensure the Password match"})
      }
      else
      { 
    return usercontroller
      .create({
        name: req.body.name,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        email: req.body.email,
        phone: req.body.phone
      })

      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
}
  },
};