import {SET_CURRENT_USER} from '../actions/types'

import {SET_GROUP} from '../actions/eventActions'
import isEmpty from 'lodash/isEmpty';

export default function group(state = [],action = {}){

  switch(action.type) {
    case SET_GROUP:
    return
     action.group;
    
    default: return state;
  }
}