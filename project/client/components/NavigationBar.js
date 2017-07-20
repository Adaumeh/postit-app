import React,{Component} from 'react';

export default() =>{
 const NavBar = React.creatClass({
 render:function(){  
 return(
 	<div>
<nav className = "navbar navbar-default">
 
<div className = "container-fluid">
<div className = "nav-header">
<button type ="button"  className = "collapse navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
<span className="icon-bar"></span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</button>
  <a className = "navbar-brand" href = "#">Post it</a>
 </div>
 

<ul className = "nav navbar-nav navbar-right">
<li> <a href = "#"> Sign up</a></li>

</ul>
</div>
</div>
</nav>
);
}