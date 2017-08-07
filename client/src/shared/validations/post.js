import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export function validateInput(data){
let errors = {};

  if(Validator.isEmpty(data.title)){
    errors.title='This field is required';
  }
  if(Validator.isEmpty(data.group)){
    errors.group ='This field is required';
  }
  if(Validator.isEmpty(data.text)){
    errors.text=' This field is required';
  }
  return{
    errors,
    isValid: isEmpty(errors)

  }
}

