(function (){
    'use strict';
    angular.module('app')
        .controller('MainController', MainController);
        
        MainController.$inject = ['$scope', 'ServiceUser', '$location'];
    
        function MainController($scope, ServiceUser, $location){
            
            $scope.searchRepo = function(username){
				ServiceUser.saveUsername = $scope.username;

				ServiceUser.query(username)
					.then(
						function(response){
							$scope.user = response.data;
							ServiceUser.detailsUser = $scope.user;
						},
						function(err){
							console.log("não encontrado!");
						}
					);
			}
        }
    })();