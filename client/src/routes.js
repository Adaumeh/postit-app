import React from 'react';
//import ReactDOM from 'react-dom';
import {Route,IndexRoute} from 'react-router';
//import {
 // HashRouter,
 // Router,
 // Link
//} from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import SignUpForm from './components/signup/SignUpForm';
import SignUpPage from './components/signup/SignUpPage';
import flashMessagesList from './components/flash/flashMessagesList'
import LoginPage from './components/login/LoginPage';
import LoginForm from './components/login/LoginForm';
import NewEventPage from './components/events/NewEventPage';
import NewPostPage from './components/messages/NewPostPage';


export default(

//<Router history={ReactRouter.hashHistory}>
<Route path="/" component={App} >
<IndexRoute  component={Greetings} />
 <Route path="/user/signup" component={SignUpPage} />
 <Route path="/user" component={flashMessagesList }/>
  <Route path="/user/signup/form" component={SignUpForm} />
  <Route path="/user/login" component={LoginPage} /> 
   <Route path="/user/login/form" component={LoginForm} />
   <Route path="user/group" component={NewEventPage} />
<Route path="user/group/messages" component={NewPostPage} />
</Route>
)
