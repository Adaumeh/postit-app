import axios from 'axios';
//import {SET_CURRENT_USER} from './types';
export const SET_GROUP = 'SET_GROUP';


export function setGroup(group) {
	return{
		type: SET_GROUP,
		group
	}
}
export function fetchGroup() {
	return dispatch => {
		axios.get('/api/user/group')
		.then(res => res.json())
		.then(data => dispatch(setGroup(data.group)));
	}
}