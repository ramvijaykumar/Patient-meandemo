'use strict'

angular.module('mean.system').controller('patientController', ['$scope', '$http', 'patientService',
function ($scope, $http, patientService) {
	
	$scope.showform = false;
	$scope.showbutton = true;

	$scope.getPatient = function(){
		patientService.getPatientinfo().success(function(data){
			$scope.getpatientdata = data;
		}).error(function(err){
			console.log("Error"+err);
		})
	};

	$scope.getPatient()

	
	$scope.addPatient = function(pt){

			var patientobj = {
				firstName: pt.fname,
				lastName: pt.lname,
				age: pt.age,
				dob: pt.dob,
				gender: pt.gender,
				contact: pt.contact,
				message: pt.message
			}	

		patientService.postPatientinfo(patientobj).success(function(data){
			console.log("Success"+data);
			$scope.getPatient();
			$scope.formDisplay();
		}).error(function(err){
			console.log("Error"+err);
		})

	};

	$scope.formDisplay = function(){
		$scope.hidebutton = !$scope.hidebutton;
		$scope.showbutton = !$scope.showbutton;
		$scope.showform = !$scope.showform;
	};
	
  }]);