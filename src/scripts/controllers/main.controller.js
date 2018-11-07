(function (){
    'use strict';
    angular.module('app')
        .controller('MainController', MainController);
        
        MainController.$inject = ['$scope', 'ServiceUser'];
    
        function MainController($scope, ServiceUser){
            
            $scope.searchUser = function(username){
				ServiceUser.saveUsername = $scope.username;

				ServiceUser.query(username)
					.then(
						function(response){
							$scope.user = response.data;
							ServiceUser.detailsUser = $scope.user;
							$scope.userErr = "";
						},
						function(err){
							$scope.userErr = "Não encontrado!";
						}
					);
			}
        }
    })();