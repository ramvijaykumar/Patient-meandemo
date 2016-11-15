'use strict'

angular.module('mean.system').factory('patientService', ['$http' ,  function($http){
	var patientobj = {};

	patientobj.getPatientinfo = function(){
		return $http.get('/api/getinfo');
	};

	patientobj.postPatientinfo = function(pt){		
		
		return $http.post('/api/postinfo', pt);
	};

	return patientobj;

}]);