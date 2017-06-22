const messages = require('../models').messages;

module.exports = {
  list(req, res) {
    if(!req.body.id ){
        res.json({message:"enter the message title"})
      }
      else if (!req.body.group){
        res.json({message:"select the group for the message"})
      }
      else
      { 
        return messages
        .all()
        .then(messages => res.status(200).send(messages))
        .catch(error => res.status(400).send(error));
      }
}
  }
