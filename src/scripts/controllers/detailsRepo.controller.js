(function (){
    'use strict';
    angular.module('app')
        .controller('DetailsRepoController', DetailsRepoController);
        
        DetailsRepoController.$inject = ['$scope', 'ServiceRepo', 'ServiceUser'];
    
        function DetailsRepoController($scope, ServiceRepo, ServiceUser){

            var saveUsername = ServiceUser.saveUsername;
        }
    })();