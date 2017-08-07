import React,{Component} from 'react';
import  {Render} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import GroupPage from './GroupPage';
//import {validateInput} from '../../shared/validations/post'
//import {setMessages} from '../../actions/groupActions';
//import {getMessageDetails} from '../../actions/groupActions';





 class GroupList extends React.Component{



  render(){
    return(

     <div classname="grouplist">
     <GroupPage  messages="id=2"></GroupPage>
     </div>
      );
  }
 }
export default GroupList



 /*export default class GroupList extends React.Component{
  constructor(props){
  super(props)
  this.state = {},
  this.messages={}
}
    
  render(){
    const sql='SELECT * FROM messages WHERE id = request.params.id';
    statics:{
      queryParams:{id:2}
      queries:{
         function user(params){
          return sql
         
      }
    }

     axios({
            method: 'get',
            responseType: 'json',
            url: 'api/group/:id/messages',

        })
            .then(response => {
                this.setState({
                    items2: response ,
                    isLoading: false
                });
                console.log("This notice belongs to : " + this.state.items2);
            })
            .catch(error => {
                console.log("Error *** : " + error);
            });
    return(

  <div>
       <span>{this.props.messages}</span>
       
       
  </div>
      )
  }
  }
  }