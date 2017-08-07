const group = require('../models').group;

module.exports = {
    create(req, res) {
    if(!req.body.group_name ){
        res.json({message:"group name is required"})
      }
      else if (!req.body.admin ){
        res.json({message:"administrator name is required"})
      }
      else if (!req.body.members){
        res.json({message:"group members is required"})
      }
      else
      { 
    return group
      .create({
        group_name: req.body.group_name,
        admin: req.body.admin,
        members: req.body.members,
        
      })
      
      .then(group => res.status(200).send(group))
      .catch(error => res.status(400).send(error));
}
  },
};