'use strict'

var mongoose = require('mongoose'),
config = require('meanio').loadConfig(), 
patientRecord = mongoose.model('patientRecord');

exports.savePatientinfo = function(req, res){

	req.assert('firstName', 'First name is required').notEmpty(); 
	req.assert('lastName', 'Last name is required').notEmpty();
	req.assert('age', 'Age is required').notEmpty();
	req.assert('dob', 'Date of Birth is required').notEmpty();
	req.assert('gender', 'Gender is required').notEmpty();
	req.assert('contact', 'Contact is required').notEmpty();
	req.assert('message', 'Message is required').notEmpty();
	
	var patientdetails = new patientRecord(req.body);

	patientdetails.save(function(err){
		if(err) {
			return res.json(500, {error:'Error while saving into DB'});
		}
		res.json(patientdetails);
	});

};

exports.getPatientinfo = function(req, res){

	patientRecord.find().exec(function(err, patientdetail){
		if(err) {
			return res.send(err);
		}
		res.json(patientdetail);
	});
};



