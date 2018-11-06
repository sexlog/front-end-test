(function (){
    'use strict';
    angular.module('app')
        .controller('RepoController', RepoController);
        
        RepoController.$inject = ['$scope', 'ServiceRepo', 'ServiceUser'];
    
        function RepoController($scope, ServiceRepo, ServiceUser){
            
            
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
        }
    })();