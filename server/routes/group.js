import express from 'express';
import authenticate from '../middlewares/authenticate';
let router = express.Router();


  router.post('/api/user/signin', authenticate,(group.create) =>{
       res.status(201).json({success:true});
       });
       export default router; 
        