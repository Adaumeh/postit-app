//import {SET_CURRENT_USER} from '../actions/types'
import React from 'react';
//import {SET_MESSAGES} from '../actions/groupActions';
//import {GET_MESSAGEDETAILS} from '../actions/groupActions';

//import isEmpty from 'lodash/isEmpty';

export default function messages(state = [],action = {}){

  switch(action.type) {
  	case SET_MESSAGES:
  	return action.messages;
    case GET_MESSAGEDETAILS:
    return action.messages;
    default: return state;
  }
}