"use strict";

/**
 * @ngdoc overview
 * @name algoland
 * @description
 * # algoland
 *
 * Main module of the application.
 */

angular.module("algoland", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch"
]);

angular.module("algoland")
    .constant("appConfig", {
        algosUrl: "algos/catalog.json",

        github: "tabalinas",
        twitter: "artem_tabalin",

        routes: [
            { url: "/", view: "views/main.html", controller: "MainCtrl", title: "Home" },
            { url: "/algo", view: "views/algo.html", controller: "AlgoCtrl", title: "Algorithms" },
            { url: "/about", view: "views/about.html", controller: "AboutCtrl", title: "About" }
        ]
    });

angular.module("algoland")
    .config(function(appConfig, $routeProvider) {
        angular.forEach(appConfig.routes, function(route) {
            $routeProvider
                .when(route.url, {
                    templateUrl: route.view,
                    controller: route.controller
                });
        });

        $routeProvider.otherwise({
            redirectTo: "/"
        });
    });
