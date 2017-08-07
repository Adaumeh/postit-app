import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
let errors = {};

	if(Validator.isNull(data.name)){
		errors.name = 'This field is required';
	}
	if(Validator.isNull(data.email)){
		errors.email = 'email field is required';
	}
	if(!Validator.isEmail(data.email)){
		errors.email = 'email is invalid';
	}
	if(Validator.isNull(data.password)){
		errors.password = 'password  is required';
	}
	if(Validator.isNull(data.confirmpassword)){
		errors.confirmpassword = 'confirmpassword field is required';
	}
	
	if(!Validator.equals(data.password,data.confirmpassword)){
		errors.confirmpassword = 'password must match';
	}
	return{
		errors,
		isValid: isEmpty(errors)

	}
}

