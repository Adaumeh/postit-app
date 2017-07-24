import  React from 'react';
import Validator from 'validator';
import isEmpty from 'lodash'
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';


function validateInput(data){
const errors = {};

  if(Validator.isEmpty(data.name)){
    errors.name='name field is required';
  }
  if(Validator.isEmpty(data.email)){
    errors.email ='email field is required';
  }
  if(Validator.isEmpty(data.password)){
    errors.password=' password field is required';
  }
  if(Validator.isEmpty(data.confirmpassword)){
    errors.confirmpassword=' This field is required';
  }
  return{
    errors,
    isValid: isEmpty(errors)

  }
}


class SignUpForm extends React.Component{



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
const{errors,isValid} = validateInput(this.state);
if(!isValid){
	this.setState({errors});
}
return isValid;
}
checkUserExist(e) {
	const field = e.target.name;
	const val = e.target.value;
	if(val !== '') {
		this.props.isUserExists(val).then(res =>{
			let errors = this.state.errors;
			let invalid;
			if(res.data.user){
				errors[field] = 'There is a user with such' + field;
				invalid = true;
			}
			this.setState({errors,invalid});
		});
	}
}

onChange(e){
	this.setState({[e.target.name]:e.target.value});
}
onSubmit(e){
	
	e.preventDefault();
	 if(this.isValid()){
	this.setState({errors: {},isLoading:true });
	this.props.userSignupRequest(this.state).then(
		() => {
			this.props.addFlashMessage({
				type:'success',
				text: 'You signed up successfully. welcome!'
			});
			this.context.router.push('/user');
		},
		({data}) => this.setState({errors:data,isLoading:false})
		);
}
}

	render(){
		const {errors} = this.state;

return (


<form onSubmit={this.onSubmit}>
<h2>Register here to signin</h2>

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

<div className={classnames("form-group", {'has-error':errors.phone})}>

<label className="control-label">phone</label>
<input
value={this.state.phone}
onChange={this.onChange}
type="number"
name="phone"
className="form-control"/>
{errors.phone &&<span className="help-block">{errors.phone}</span>}
</div>


<div className="form-group"/>
<button disabled= {this.state.isLoading}className="btn btn-primary btn-jg">
sign up
</button>
</form>

);
}
}



SignUpForm.PropTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage:React.PropTypes.func.isRequired
}
SignUpForm.contextTypes ={
	router: React.PropTypes.object.isRequired
}
export default SignUpForm;


