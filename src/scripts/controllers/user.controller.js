(function (){
    'use strict';
    angular.module('app')
        .controller('UserController', UserController);
        
        UserController.$inject = ['$scope', 'ServiceUser'];
    
        function UserController($scope, ServiceUser){
            $scope.user = ServiceUser.detailsUser;
        }
    })();