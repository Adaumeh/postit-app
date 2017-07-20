import React from 'react';

import NavigationBar from './NavigationBar'
import Greetings from './Greetings.js'
import flashMessagesList from './flash/flashMessagesList.js'
import LoginPage from './login/LoginPage'

class App extends React.Component {
render() {
	  return(

	  	<div className= "container">
		<NavigationBar />
		<flashMessagesList />
		{this.props.children}
        
		</div>
		);
    }
}
export default App;
