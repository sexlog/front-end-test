(function (){
    'use strict';
    angular.module('app')
        .controller('DetailsRepoController', DetailsRepoController);
        
        DetailsRepoController.$inject = ['$scope', 'ServiceDetailsRepo', 'ServiceUser'];
        
        function DetailsRepoController($scope, ServiceDetailsRepo, ServiceUser){
            $scope.usergithub = ServiceUser.saveUsername;

            $scope.detailsrepo = ServiceDetailsRepo.detailsRepo;
        }
    })();