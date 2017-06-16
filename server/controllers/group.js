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
        memb_phone: req.body.memb_phone,
        msg_id: req.body.msg_id,
        sender_id: req.body.sender_id,
        msg_value: req.body.msg_value,
        title:req.body.title
      })
      
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
}
  },
};