(function (){
    'use strict';
    angular.module('app')
        .controller('MainController', MainController);
        
        MainController.$inject = ['$scope', 'ServiceUser', '$location'];
    
        function MainController($scope, ServiceUser, $location){
            
            $scope.searchRepo = function(username){
				ServiceUser.query(username)
					.then(
						function(response){
							$scope.user = response.data;

							ServiceUser.detailsUser = $scope.user;
							$location.path('/teste');
						},
						function(err){
							console.log("não encontrado!");
						}
					);
			}
        }
    })();