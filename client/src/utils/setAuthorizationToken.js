import axios from 'axios';
import jwtDecode from 'jwt-decode'

export default  function setAuthorizationToken(token){
  if(token){
    axios.defaults.headers.common['Authorization'] = token;
}
else {
  delete axios.defaults.headers.common['Authorization'];
}
}