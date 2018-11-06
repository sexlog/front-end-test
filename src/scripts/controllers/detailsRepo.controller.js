(function (){
    'use strict';
    angular.module('app')
        .controller('DetailsRepoController', DetailsRepoController);
        
        DetailsRepoController.$inject = ['$scope', 'ServiceDetailsRepo'];
        
        function DetailsRepoController($scope, ServiceDetailsRepo){
            $scope.detailsrepo = ServiceDetailsRepo.detailsRepo;
            console.log(ServiceDetailsRepo.detailsRepo);
        }
    })();