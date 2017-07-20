import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';


class NavigationBar extends React.Component{
logout(e){
e.preventDefault();
this.props.logout();

}

render(){ 
const {isAuthenticated} = this.props.auth;
const userLinks = (
<ul className = "nav navbar-nav navbar-right">
<li> <Link to="/user/group"> create</Link></li>
<li> <Link to="/user/group/:id/messages"> view</Link></li>
<li> <Link to="/user/group/id/messages"> send</Link></li>
<li> <Link to="/user/group/adduser"> adduser</Link></li>
<li> <a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
</ul>

	);
const guestLinks = (
<ul className = "nav navbar-nav navbar-right">
<li> <Link to="/user/signup"> Sign up</Link></li>
<li> <Link to="/user/login"> Login</Link></li>

</ul>

	);

 return(
<nav className = "navbar navbar-default">
 
<div className = "container-fluid">
<div className = "nav-header">
<Link to="/" className="navbar-brand">Post it</Link>
 
 </div>
 
 
<div className = "collapse navbar-collapse">
{isAuthenticated ? userLinks: guestLinks}
</div>
</div>
</nav>
);
}
}
NavigationBar.propTypes ={
	auth: React.PropTypes.object.isRequired,
	logout: React.PropTypes.func.isRequired
}
function mapStateToProps(state){
	return{
		auth: state.auth
	};
}
export default connect(mapStateToProps,{logout})(NavigationBar);