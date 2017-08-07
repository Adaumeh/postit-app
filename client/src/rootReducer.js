import {combineReducers} from 'redux';
import  flashMessages from './reducers/flashMessages';
import  auth from './reducers/auth';
import group from './reducers/group';
//import messages from './reducers/groups';

//import messages from './reducers/message';

export default combineReducers({
flashMessages,
auth,
group
});