'use strict'

var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({

	firstName:{
		type:String
	},
	lastName:{
		type:String
	},
	age:{
		type:String
	},
	dob:{
		type:String
	},
	gender:{
		type:String
	},
	contact:{
		type:String
	},
	message:{
		type:String
	}
});

mongoose.model('patientRecord', patientSchema);