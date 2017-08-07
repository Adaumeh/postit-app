import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export  function  validateInput(data){
let errors = {};

	if(Validator.isEmpty(data.name)){
		errors.name = 'This field is required';
	}
	if(Validator.isEmpty(data.email)){
		errors.email = 'email field is required';
	}
	if(Validator.isEmpty(data.password)){
		errors.password = 'password  is required';
	}
	if(Validator.isEmpty(data.confirmpassword)){
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

