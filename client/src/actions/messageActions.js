import axios from 'axios';
import request from 'lodash'
export const SET_GROUP = 'SET_GROUP';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

 export function setGroup(group){
   return dispatch => {
    type: SET_GROUP,
    group
    
  };
}


export  function setMessages(message){
   return dispatch => {
    type: SET_MESSAGES,
    message
    
  };
}

 export function fetchMessage(group_id){
   return dispatch => {
  return axios.get('/api/group/creategroup', group_id).then(res =>{
     setMessages(group_id);
  });
};
}



export function messageEvent(event){
   
   return dispatch => {
	return axios.post('/api/group/id/messages', event);
		
	};
}


export function cancelEvent(event){
  return dispatch =>{
	return ('/')

  };
}
		

