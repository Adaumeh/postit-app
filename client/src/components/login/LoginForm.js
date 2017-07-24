import React from 'react';
//import TextFieldGroup from '../common/TextFieldGroup';
import classnames from 'classnames';
import {validateInput} from '../../shared/validations/login';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';



class LoginForm extends React.Component {
 constructor(props){
  super(props);
  this.state={
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    phone: '',
    errors:{},
    isLoading: false
  }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

isValid(){
  const {errors,isValid} = validateInput(this.state);
  if(!isValid){
    this.setState({errors});
  }
  return isValid;
}
onChange(e){
  this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
  e.preventDefault();
  if(this.isValid()){
  this.setState({errors: {},isLoading:true });
  this.props.login(this.state).then(
    (res) =>this.context.router.push('/'),
    (err) => this.setState({errors:err.response.data.errors,isLoading:false})
    );
}
}
  render(){
    const {errors,name,email,password} = this.state;

return (


<form onSubmit={this.onSubmit}>
<h1>Login</h1>

<div className={classnames("form-group", {'has-error':errors.name})}>
<label className="control-label">name</label>
<input
value={this.state.name}
onChange={this.onChange}
type="text"
name="name"
className="form-control"/>
{errors.name &&<span className="help-block">{errors.name}</span>}
</div>

<div className={classnames("form-group", {'has-error':errors.email})}>

<label className="control-label">email</label>
<input
value={this.state.email}
onChange={this.onChange}
type="text"
name="email"
className="form-control"/>
{errors.email &&<span className="help-block">{errors.email}</span>}

</div>

<div className={classnames("form-group", {'has-error':errors.password})}>

<label className="control-label">password</label>
<input
value={this.state.password}
onChange={this.onChange}
type="password"
name="password"
className="form-control"/>
{errors.password &&<span className="help-block">{errors.password}</span>}

</div>

<div className={classnames("form-group", {'has-error':errors.confirmpassword})}>

<label className="control-label">confirmpassword</label>
<input
value={this.state.confirmpassword}
onChange={this.onChange}
type="password"
name="confirmpassword"
className="form-control"/>
{errors.confirmpassword &&<span className="help-block">{errors.confirmpassword}</span>}
</div>

<div className="form-group"/>
<button disabled= {this.state.isLoading}className="btn btn-primary btn-jg">
Login
</button>
</form>

);
}
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}
LoginForm.contextTypes = {
  router:React.PropTypes.object.isRequired
}
   
  

export default connect(null, {login})(LoginForm);





