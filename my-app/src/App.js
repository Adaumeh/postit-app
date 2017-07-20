import React from 'react';

import NavigationBar from './components/NavigationBar'
import Greetings from './components/Greetings.js'
//import SignUpPage from './components/SignUpPage.js'
class App extends React.Component {
render() {
    return(

      <div className= "container">
    <NavigationBar />
    {this.props.children}
    <Greetings />

  
    </div>
    );
    }
}
export default App;
