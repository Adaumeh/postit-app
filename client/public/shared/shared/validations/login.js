import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export  function validateInput(data){
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
	return{
		errors,
		isValid: isEmpty(errors)

	}
}

