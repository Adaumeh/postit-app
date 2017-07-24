import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {validateInput} from '../../shared/validations/post'

import {messageEvent} from '../../actions/messageActions';

class PostNewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      group: '',
      text:'',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isValid(){
  const {errors,isValid} = validateInput(this.state);
  if(!isValid){
    this.setState({errors});
  }
  return isValid;
}

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
   if(this.isValid()){
   this.setState({errors: {},isLoading:true });
   this.props.messageEvent(this.state).then(
    (res) =>this.context.router.push('/'),
    (err) => this.setState({errors:err.response.data.errors,isLoading:false})
    );
}
}
  render(){
    const {title,group, text, errors,isLoading} = this.state;
    return(
      <form onSubmit ={this.onSubmit}>
      <h3>Post Your Notice</h3>
 <div className={classnames("form-group", {'has-error':errors.title})}>

<label className="control-label">title</label>
<input
value={this.state.title}
onChange={this.onChange}
type="text"
name="title"
className="form-control"/>
{errors.title &&<span className="help-block">{errors.title}</span>}

</div>

<div className={classnames("form-group", {'has-error':errors.group})}>

<label className="control-label">group</label>
<input
value={this.state.group}
onChange={this.onChange}
type="text"
name="group"
className="form-control"/>
{errors.group &&<span className="help-block">{errors.group}</span>}

</div>
<div className={classnames("form-group", {'has-error':errors.text})}>

<label className="control-label">text</label>
<input
value={this.state.text}
onChange={this.onChange}
type="text"
name="text"
className="form-control"/>
{errors.text &&<span className="help-block">{errors.text}</span>}

</div>

      <button type="submit" className="btn btn-primary btn-lg">Post</button>
      
     <button type ="cancel" Link to="/" className="btn btn-danger btn-lg">Cancel</button>
      
      </form>
      );
}
}
PostNewForm.propTypes={
messageEvent:React.PropTypes.func.isRequired
}

export default connect(null, {messageEvent})(PostNewForm);

