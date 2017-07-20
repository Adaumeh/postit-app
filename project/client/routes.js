import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
//import {
 // HashRouter,
 // Router,
 // Link
//} from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
export default(
//<Router history={ReactRouter.hashHistory}>
<Route path="/" component={App}>
Route  path="/" component={Greetings} >
</Route>
)
