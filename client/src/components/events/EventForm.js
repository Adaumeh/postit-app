import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {createEvent} from '../../actions/eventActions';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group_name: '',
      admin: '',
      members:'',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    this.props.createEvent(this.state);
}
  render(){
    const {group_name,admin, members, errors,isLoading} = this.state;
    return(
      <form onSubmit ={this.onSubmit}>
      <h2>Create  Group</h2>
 <div className={classnames("form-group", {'has-error':errors.group_name})}>

<label className="control-label">group_name</label>
<input
value={this.state.group_name}
onChange={this.onChange}
type="text"
name="group_name"
className="form-control"/>
{errors.group_name &&<span className="help-block">{errors.group_name}</span>}

</div>

<div className={classnames("form-group", {'has-error':errors.admin})}>

<label className="control-label">admin</label>
<input
value={this.state.admin}
onChange={this.onChange}
type="text"
name="admin"
className="form-control"/>
{errors.group_name &&<span className="help-block">{errors.admin}</span>}

</div>
<div className={classnames("form-group", {'has-error':errors.members})}>

<label className="control-label">members</label>
<input
value={this.state.members}
onChange={this.onChange}
type="text"
name="members"
className="form-control"/>
{errors.group_name &&<span className="help-block">{errors.members}</span>}

</div>

      <button type="submit" className="btn btn-primary">Create</button>
      </form>
      );
}
}
EventForm.propTypes={
createEvent:React.PropTypes.func.isRequired
}

export default connect(null, {createEvent})(EventForm);

