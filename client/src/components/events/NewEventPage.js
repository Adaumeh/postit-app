import React from 'react';
import EventForm from './EventForm';
import {connect}  from 'react-redux';
import {createEvent} from '../../actions/eventActions'
class NewEventPage extends React.Component {
	render(){
		return(
       <div className="row">
       <div className="col-md-4 col-md-offset-4">
       <EventForm />
       </div>
     </div>
	 );
  }
}
NewEventPage.propTypes ={
	createEvent: React.PropTypes.func.isRequired
}
function mapStateToProps(state){
	return{
		group: state.group
	};
}
export default connect (mapStateToProps,{createEvent})(NewEventPage);