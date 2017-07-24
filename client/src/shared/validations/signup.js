import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export function validateInput(data){
let errors = {};

  if(Validator.isEmpty(data.name)){
    errors.name='This field is required';
  }
  if(Validator.isEmpty(data.email)){
    errors.email ='This field is required';
  }
  if(Validator.isEmpty(data.password)){
    errors.password=' This field is required';
  }
  if(Validator.isEmpty(data.confirmpassword)){
    errors.confirmpassword=' This field is required';
  }
  return{
    errors,
    isValid: isEmpty(errors)

  }
}

