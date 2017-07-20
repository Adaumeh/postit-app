import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import App from './components/App'
import Greetings from './components/Greetings'
//import SignUpPage from './components.SignUpPage.js'
export class App extends React.Component {
render(){
	return(
     <BrowserRouter>
     <Switch>
              <Route path="/" component={App}/>
          <Route path="/" component={Greetings}/>
          //<Route path="/signup" component={SignUpPage}/>
      </Switch>    
     </BrowserRouter>
     ),
     document.getElementById('app');
 }
   } 