import axios from 'axios';

export function messageEvent(event){
   
   return dispatch => {
	return axios.post('/api/group/id/messages', event);
		
	};
}
export function cancelEvent(event){
  
	return ('/')
		

}