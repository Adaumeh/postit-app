import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export function validateInput(data){
let errors = {};

	if(Validator.isEmpty(data.group_name)){
		errors.group_name='This field is required';
	}
	if(Validator.isEmpty(data.admin)){
		errors.admin ='This field is required';
	}
	if(Validator.isEmpty(data.members)){
		errors.members=' This field is required';
	}
	return{
		errors,
		isValid: isEmpty(errors)

	}
}

