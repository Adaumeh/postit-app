const messages = require('../models').messages;

module.exports = {
  list(req, res) {
    if(!req.params.id){
        res.json({message:"enter the group id"})
      }
      else
      {
        return messages

        .all()
        .then(messages => res.status(200).send(succesfull))
        .catch(error => res.status(400).send(error));
      }
}
  }