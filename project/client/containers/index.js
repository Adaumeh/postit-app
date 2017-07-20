import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App.js';
import Greetings from './components/Greetings.js';
import SignUpPage from './components/signup/SignUpPage.js'


ReactDOM.render((
     <BrowserRouter>
     <div>
          <Route  path="/" component={App}/>
          <Route path="home" component={Greetings}/>
          
          <Route path="signup" component={SignUpPage}/>
      </div>
     </BrowserRouter>
     ),
     document.getElementById('app')
     );