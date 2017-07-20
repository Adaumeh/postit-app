import  React from 'react';
class SignUpForm extends React.Component{
constructor(props){
	super(props);
	this.state={
		username: '',
		email: '',
		password: '',
		confirmpassword: '',
		phone: ''
	}
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
}
onChange(e){
	this.setState({[e.target.name]:e.target.value});
}
onSubmit(e){
	e.preventDefault();
	this.props.userSignupRequest(this.state);
}
	render(){
		return (
<form onSubmit={this.onSubmit}>
<h2>Register here to sign in</h2>
<div className="form-group">
<label className="controls-label">username</label>
<input
value={this.state.username}
onChange={this.onChange}
type="text"
name="username"
className="form-control"/>
</div>
<div className="form-group">
<label className="controls-label">email</label>
<input
value={this.state.email}
onChange={this.onChange}
type="text"
name="email"
className="form-control"/>
</div>

<div className="form-group">
<label className="controls-label">password</label>
<input
value={this.state.password}
onChange={this.onChange}
type="password"
name="password"
className="form-control"/>
</div>

<div className="form-group">
<label className="controls-label">confirmpassword</label>
<input
value={this.state.confirmpassword}
onChange={this.onChange}
type="password"
name="confirmpassword"
className="form-control"/>
</div>

<div className="form-group">
<label className="controls-label">phone</label>
<input
value={this.state.phone}
onChange={this.onChange}
type="number"
name="phone"
className="form-control"/>
</div>


<div className="form-group"/>
<button className="btn btn-primary btn-jg">
sign up
</button>
</form>

);
}
}

SignUpForm.PropTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignUpForm;


