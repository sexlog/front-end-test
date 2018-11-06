(function (){
    'use strict';
    angular.module('app')
        .controller('RepoController', RepoController);
        
        RepoController.$inject = ['$scope', 'SeriveRepo'];
    
        function RepoController($scope, SeriveRepo){
            
            $scope.searchRepo = function(username){
                var checkRepos = 0;
				SeriveRepo.get(username)
					.then(
						function(response){
                            $scope.repos = response.data;
						},
						function(err){
							console.log("não encontrado!");
						}
                    );                    
			}
        }
    })();