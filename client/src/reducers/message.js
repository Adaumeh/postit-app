import {SET_MESSAGES,FETCH_MESSAGE} from '../actions/messageActions'

///import {SET_GROUP} from '../actions/types'
import shortid from 'lodash';

export default function messages(state = [],action = {}){

switch(action.type) {
case FETCH_MESSAGE:
const index = state.findIndex(message =>id === action.message.id);
if(index > -1){
	return state.map(item =>{
		if(id === action.message.id) return action.messages;
		return items;
	});
}
return
    case SET_MESSAGES:
    return
     action.messages;
    default: return state;
  }
}