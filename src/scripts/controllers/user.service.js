angular.module('app')
    .service('ServiceUser', function($http){
		this.query = function(username){
			return $http.get("https://api.github.com/users/" + username + "?client_id=699079e80657c92a8f2a&client_secret=11b16c7bcf4ac50abc5635cebcb1675f011917bb");
		};
	});


