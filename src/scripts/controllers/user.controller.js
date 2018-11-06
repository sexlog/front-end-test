(function (){
    'use strict';
    angular.module('app')
        .controller('UserController', UserController);
        
        UserController.$inject = ['$scope', 'ServiceUser', '$location'];
    
        function UserController($scope, ServiceUser, $location){
            console.log($scope.user = ServiceUser.detailsUser);
        }
    })();