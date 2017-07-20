import React from 'react';
//import ReactDOM from 'react-dom';
import {Route,IndexRoute} from 'react-router';
//import {
 // HashRouter,
 // Router,
 // Link
//} from 'react-router-dom';
import App from './components/App';
import SignUpForm from './components/signup/SignUpForm';
import SignUpPage from './components/signup/SignUpPage';
export default(

//<Router history={ReactRouter.hashHistory}>
<Route path="/" component={App} >

 <Route path="/user/signup" component={SignUpPage} />
  <Route path="/user/signup/form" component={SignUpForm} />
</Route>
)
