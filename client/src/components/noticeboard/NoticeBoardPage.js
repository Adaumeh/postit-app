import React, { Component } from 'react';
import {connect} from 'react-redux'
import MessageList from '../messages/MessageList';
class NoticeBoardPage extends Component {  
  render() {
    return (
     
      <div>
          <h2>Check your notices here</h2>
          <MessageList messages= {this.props}/>
      </div>
    );
  }
}


function mapStateToProps(state){
	return {
		messages:state.messages
	}
}
export default connect(mapStateToProps,{})(NoticeBoardPage);