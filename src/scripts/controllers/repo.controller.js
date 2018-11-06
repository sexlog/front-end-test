(function (){
    'use strict';
    angular.module('app')
        .controller('RepoController', RepoController);
        
        RepoController.$inject = ['$scope', 'ServiceRepo', 'ServiceUser', 'ServiceDetailsRepo', '$location'];
    
        function RepoController($scope, ServiceRepo, ServiceUser, ServiceDetailsRepo, $location){
            
				var readUsername = ServiceUser.saveUsername;
				$scope.propertyName = 'stargazers_count';
				$scope.reverse = true;

				ServiceRepo.query(readUsername)
					.then(
						function(response){
							$scope.repo = response.data;
						},
						function(err){
							console.log("não encontrado!");
						}
					);

				$scope.sortBy = function(propertyName) {
					$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
					$scope.propertyName = propertyName;
				};

				$scope.showDetailsRepo = function(nameRepo){
					ServiceDetailsRepo.query(nameRepo)
						.then(
							function(response){
								$scope.detailsrepo = response.data;
								ServiceDetailsRepo.detailsRepo = $scope.detailsrepo;
								$location.path('/detailsrepo');
							},
							function(err){
								console.log("não encontrado!");
							}
						);
				}
        }
    })();