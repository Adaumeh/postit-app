import React,{Component} from 'react';
import {Link} from 'react-router';
export default() =>{  
 return(
<nav className = "navbar navbar-default">
 
<div className = "container-fluid">
<div className = "nav-header">
<Link to="/" className="navbar-brand">Post it</Link>
 
 </div>
 
 
<div className = "collapse navbar-collapse">
<ul className = "nav navbar-nav navbar-right">
<li> <Link to="/user/signup"> Sign up</Link></li>

</ul>
</div>
</div>
</nav>
);
}