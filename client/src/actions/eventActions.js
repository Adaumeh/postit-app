import axios from 'axios';
export const SET_GROUP = 'SET_GROUP';

export function setGroup(group){
   
   return dispatch => {
    type: SET_GROUP,
    group
		
	};
}
export function createEvent(event){
   
   return dispatch => {
	return axios.post('/api/group/creategroup', event);
		
	};
}