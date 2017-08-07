const adduser = require('../models').adduser;

module.exports = {
    create(req, res) {
    if(!req.body.group_id ){
        res.json({message:"group_id is required"})
      }
      else if (!req.body.user_id ){
        res.json({message:"user_id is required"})
      }
      
      else
      { 
    return adduser
      .create({
        group_id: req.body.group_id,
        user_id: req.body.user_id 
      })
      
      .then(adduser => res.status(200).send(adduser))
      .catch(error => res.status(400).send(error));
}
  },
};