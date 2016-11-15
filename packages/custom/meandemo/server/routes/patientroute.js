'use strict'

/*var patientdetails = require('../controllers/patientcontroller');*/
var config = require('meanio').loadConfig();

module.exports = function(MeanUser, app, auth){
	console.log('In routes');
	var patientdetails = require('../controllers/patientcontroller');
	app.route('/api/postinfo').post(patientdetails.savePatientinfo);
	app.route('/api/getinfo').get(patientdetails.getPatientinfo);


  };

