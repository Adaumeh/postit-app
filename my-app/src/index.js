
import React from 'react';
import { render} from 'react-dom';
//import App from './components/App';
//import Greetings from './components/Greetings';
//import SignUpPage from './components/signup/SignUpPage';
import routes from './routes';
import { Router,browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
//import SignUpPage from './components/signup/SignUpPage.js';
const store = createStore(
(state ={}) =>state,
applyMiddleware(thunk)
	);

render(
   <Provider store={store}>
   <Router  history={browserHistory} routes={routes} />
    </Provider>,document.getElementById('app'));
