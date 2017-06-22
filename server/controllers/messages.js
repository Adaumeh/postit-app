const messages = require('../models').messages;

module.exports = {
  create(req, res) {
    if(!req.body.title ){
        res.json({message:"enter the message title"})
      }
      else if (!req.body.text ){
        res.json({message:"type the message body"})
      }
      else if (!req.body.group){
        res.json({message:"select the group for the message"})
      }
      else
      { 
    return messages
      .create({
        title: req.body.title,
        text: req.body.text,
        group: req.body.group,
      })

      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error));
}
  },
};