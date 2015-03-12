'use strict';

/**
 * @ngdoc overview
 * @name algoland
 * @description
 * # algoland
 *
 * Main module of the application.
 */
angular
    .module('algoland', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                currentPage: 'home'
            })
            .when('/algo', {
                templateUrl: 'views/algo.html',
                controller: 'AlgoCtrl',
                currentPage: 'algo'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                currentPage: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
