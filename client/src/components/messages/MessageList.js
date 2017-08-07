import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {validateInput} from '../../shared/validations/post'

import {fetchMessage} from '../../actions/messageActions';

class MessageList extends React.Component {
  fetchMessage(e){
e.preventDefault();
this.props.fetchMessage();
}
  render(){
    return(
      
<div>
    <messages messages={this.props} />
   </div>
      )};
  
}
MessageList.propTypes={
  fetchMessage:React.PropTypes.func.isRequired
}
function mapStateToProps(state){
  return{
    messages: state.messages
  };
}
export default connect(mapStateToProps,{fetchMessage})(MessageList);

