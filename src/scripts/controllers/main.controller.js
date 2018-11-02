angular.module('app')
    .controller('MainController', ['$scope', '$http', function($scope, $http){
        
		$scope.searchRepo = function(username){
			var self = username;
			var url = "https://api.github.com/users/" + self + "/repos";
			var checkRepos = 0;
			var checkfollowers = 0;

			var followers_github = "https://api.github.com/users/" + self;
		
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

				$http.get(followers_github)
				.then(
					function(response){
						$scope.followers = response.data.followers;
					}
				);
		}
    }]);
