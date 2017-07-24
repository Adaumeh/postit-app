import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Greetings from './components/Greetings.js'
import flashMessagesList from './components/flash/flashMessagesList'

//import SignUpPage from './components/SignUpPage.js'
class App extends React.Component {
render() {
    return(
      <div className= "container">
    <NavigationBar />
   <flashMessagesList />
    {this.props.children}
    <Greetings />

  
    </div>
    );
    }
}
export default App;
