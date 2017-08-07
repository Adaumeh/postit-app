const messages = require('../models').messages;
const group = require('../models').group;

module.exports = {
  retrieve(req, res) {
   
        return messages
        //.findAll()
         .findById(req.params.id,{
        //.then(messages => res.status(200).send(messages))
       incude:{

         messages
        },

      })
        //.catch(error => res.status(400).send(error.toString()));
      .then(messages => {
      if (!messages) {
        return res.status(404).send({
          message: 'Message Not Found',
        });
      }
      return res.status(200).send(messages);
    })
    .catch(error => res.status(400).send(error));
}
}

  