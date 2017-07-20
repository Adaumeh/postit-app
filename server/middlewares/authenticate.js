import jwt from 'jsonwebtoken';
import user from '../models/user';
const secret = "drtguug8*werty+uifghyu";
 
export default (req,res,next) => {
	const authorizationHeader = req.headers['authorization'];
	let token;
	if(authorizationHeader){
		token = authorizationHeader.split('')[1];
	}
	if(token){
jwt.verify(token,secret,(err,decoded) =>{
if(err){
	res.status(401).json({error:'Failed.authenticate'})
}else{
	new user({id:decoded.id}).fetch().then(user =>{
if(!user){
	res.status(404).json({error:'No such user'});
}else{
req.userId = decoded;
next();
}
});
	}else{
		res.status(403).json({
			errors: 'No token provided'
		});
	}
}