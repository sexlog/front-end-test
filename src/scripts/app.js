angular.module('app', [
        'ngRoute', 'ngResource', 'ngLocalStorage'
    ])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'src/views/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
           .when('/repo', {
                templateUrl: 'src/views/repo.html',
                controller: 'RepoController',
                controllerAs: 'repo'
            });
    })