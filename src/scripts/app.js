angular.module('app', [
        'ngRoute', 'ngResource', 'ngLocalStorage'
    ])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'src/views/main.html',
                controller: 'MainController'
            })
            .when('/teste', {
                templateUrl: 'src/views/user.html',
                controller: 'UserController'
            })
           .when('/repo', {
                templateUrl: 'src/views/repo.html',
                controller: 'RepoController'
            });
    })