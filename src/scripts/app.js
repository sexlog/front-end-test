angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'src/views/main.html',
                controller: 'MainController'
            })
            .when('/user', {
                templateUrl: 'src/views/user.html',
                controller: 'UserController'
            })
           .when('/repo', {
                templateUrl: 'src/views/repo.html',
                controller: 'RepoController'
            })
            .when('/detailsrepo', {
                templateUrl: 'src/views/detailsrepo.html',
                controller: 'DetailsRepoController'
            });
    })