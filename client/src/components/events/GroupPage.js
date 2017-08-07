import React from 'react';
import Router from 'react-router';
import axios from 'axios';
//const getmessages = require('../../controllers/getmessages');
//const ReactFireMixin = require('reactfire');
//const getMessageDetails = require('../../actions/groupActions');
//import GroupList from './GroupList';

const urlForMessages = messages => 'api/group/:id/messages';
class  GroupPage extends React.Component{
constructor(props){
  super(props)
  this.state = {}
}


  componentDidMount(){
    axios.get(urlForMessages(this.props.messages))
    
            .then(response => {
                this.setState({
                    messages: response.toString() ,
                    isLoading: false
                });
                console.log("This notice belongs to : " + this.state.messages);
            })
  }
  render(){
    if(!this.state.messages) return <p>loading...</p>
    return (
      <div className="row">
        <div className="col-md-4">

        <h2>{this.state.messages}</h2>
        </div>>
      </div>
    )
  }
}

export default GroupPage;