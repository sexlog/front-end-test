angular.module('app')
    .controller('MainController', ['$scope', '$http', function($scope, $http){
        
		$scope.searchRepo = function(username){
			var self = username;
			var url = "https://api.github.com/users/" + self + "/repos?client_id=699079e80657c92a8f2a&client_secret=11b16c7bcf4ac50abc5635cebcb1675f011917bb";
			var checkRepos = 0;
			var detailsUserGithub = "https://api.github.com/users/" + self + "?client_id=699079e80657c92a8f2a&client_secret=11b16c7bcf4ac50abc5635cebcb1675f011917bb";

			$http.get(url)
				.then(
					function(response){
						$scope.repos = response.data;
						checkRepos = $scope.repos.length;
						if(checkRepos > 0){
							$('.errorSearch').hide();
						}else{
							$('.errorSearch').show();
						}
					},
					function(err){
						$scope.incorrectReturn = 'Username não encontrado!';
						$('ul').hide();
						$('.errorSearch').show();
					}
				);

				$http.get(detailsUserGithub)
				.then(
					function(response){
						$scope.followers = response.data.followers;
					}
				);

				$http.get(detailsUserGithub)
				.then(
					function(response){
						$scope.following = response.data.following;
					}
				);

				$http.get(detailsUserGithub)
				.then(
					function(response){
						$scope.bio = response.data.bio;
					}
				);

				$http.get(detailsUserGithub)
				.then(
					function(response){
						$scope.email = response.data.email;
					}
				);

				$http.get(detailsUserGithub)
				.then(
					function(response){
						$scope.avatar_url = response.data.avatar_url;
					}
				);

				
		}
    }]);
