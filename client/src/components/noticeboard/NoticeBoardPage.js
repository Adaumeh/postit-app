import React, { Component } from 'react';
import {connect} from 'react-redux'
import MessageList from '../messages/MessageList';
import {fetchMessage} from '../../actions/messageActions';


class NoticeBoardPage extends React.Component {
constructor(props){
super(props)

}
  render() {
    return (
     
      <div>
          <h2>Check your notices here</h2>
          <MessageList/>
      </div>
    );
  }
}

 NoticeBoardPage.propTypes ={
  fetchMessage: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
	return {
		messages:state.messages
	}
}
export default connect(mapStateToProps,{fetchMessage})(NoticeBoardPage);