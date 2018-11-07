(function (){
	'use strict';
	angular.module('app')
		.service('ServiceDetailsRepo', ServiceDetailsRepo);
			
		ServiceDetailsRepo.$inject = ['$http', 'ServiceUser'];
		
		function ServiceDetailsRepo($http, ServiceUser){
			var readUsername = ServiceUser.saveUsername;
			const detailsRepo = "";
			
			this.query = function ServiceDetailsRepo(nameRepo){
				return $http.get("https://api.github.com/repos/" + readUsername + "/" + nameRepo + "?client_id=699079e80657c92a8f2a&client_secret=11b16c7bcf4ac50abc5635cebcb1675f011917bb");
			};
		};		
})();


