import axios from 'axios';
export const SET_GROUP = 'SET_GROUP';
export const SET_GROUPID = 'SET_GROUPID';
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
export function setGroupid(group_id){
   
   return dispatch => {
    type: SET_GROUPID,
    group_id
		
	};
}