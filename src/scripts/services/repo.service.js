(function (){
	'use strict';
	angular.module('app')
		.service('ServiceRepo', ServiceRepo);
			
		ServiceRepo.$inject = ['$http'];
		
		function ServiceRepo($http){
			this.query = function ServiceRepo(readUsername){
				return $http.get("https://api.github.com/users/" + readUsername + "/repos?client_id=699079e80657c92a8f2a&client_secret=11b16c7bcf4ac50abc5635cebcb1675f011917bb");
			};
		};		
})();


