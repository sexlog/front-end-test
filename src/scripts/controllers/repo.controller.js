(function (){
    'use strict';
    angular.module('app')
        .controller('RepoController', RepoController);
        
        RepoController.$inject = ['$scope', 'ServiceRepo', 'ServiceUser', 'ServiceDetailsRepo'];
    
        function RepoController($scope, ServiceRepo, ServiceUser, ServiceDetailsRepo){
            
            
				var teste = ServiceUser.saveUsername;

				ServiceRepo.query(teste)
					.then(
						function(response){
							$scope.repo = response.data;
						},
						function(err){
							console.log("não encontrado!");
						}
					);

					$scope.propertyName = 'stargazers_count';
					$scope.reverse = true;
					$scope.sortBy = function(propertyName) {
						$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
						$scope.propertyName = propertyName;
					  };


					  $scope.showDetailsRepo = function(nameRepo){
						ServiceDetailsRepo.query(nameRepo)
						.then(
							function(response){
								$scope.detailsrepo = response.data;
								console.log($scope.detailsrepo);
							},
							function(err){
								console.log("não encontrado!");
							}
						);
					}
        }
    })();