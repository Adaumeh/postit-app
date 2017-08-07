import axios from 'axios';
import messages from '../rootReducer'
export const SET_MESSAGES = 'SET_MESSAGES';
export const GET_MESSAGEDETAILS = 'GET_MESSAGEDETAILS';




export function setMessages(messages){
   return {
    type: SET_MESSAGES,
    messages
   }
 }
/* export function fetchmessages(){
 const myRequest = new Request('api/group/:id/messages?id');

const myURL = myRequest.url; 
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit
fetch(myRequest)
    .then(function(response) {
        return response.blob();
    })
    .then(function(response) {
        const objectURL = URL.createObjectURL(response);
        messages.src = objectURL;
    });
  }


export function setMessageState(messages) {
    this.setState({
      messages: messages.data
    });
  },*/

 /*function fetchmessages(id){
  return 
    axios.get('api/group/:id/messages/'+id);
}
export default function getMessageDetails(id){
    return axios.all([fetchmessages(id)])
      .then(function(arr){
        return {
          type: GET_MESSAGEDETAILS,
          messages: arr[0].data
        }
      })
  }*/


let sql=select mesages from postit.messages where group_id=request.params.id;
 axios({
            method: 'get',
            responseType: 'json',
            url: 'api/group/:id/messages?id',

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
    }
  /* return dispatch => {
    axios.get('api/group/:id/messages',{
      params:{
        id:req.params.id
      }
    .then(function(response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
      })
  })
  }
}
*/
