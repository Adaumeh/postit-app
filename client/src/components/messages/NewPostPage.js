import React from 'react';
import LoginForm from  './LoginForm';
class NewPostPage extends React.Component {

  render(){
    return(

     <div className="row">
     <div className="col-md-4 col-md-offset-4">
     <PostNew />
     </div>
     </div>
      );
  }
}
export default NewPostPage;