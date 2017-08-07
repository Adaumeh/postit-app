import {combineReducers} from 'redux';
import  flashMessages from './reducers/flashMessages';
import  auth from './reducers/auth';
import group from './reducers/group';
//import posts from './reducers/messages';

export default combineReducers({
flashMessages,
auth,
group
});