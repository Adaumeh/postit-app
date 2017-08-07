import React from 'react';
import PostNewForm from './PostNewForm';


class NewPostPage extends React.Component {

  render(){
    return(

     <div className="row">
     <div className="col-md-4 col-md-offset-4">
     <PostNewForm />
     </div>
     </div>
      );
  }
}
export default NewPostPage;