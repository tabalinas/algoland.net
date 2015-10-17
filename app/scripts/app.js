"use strict";

/**
 * @ngdoc overview
 * @name algoland
 * @description
 * # algoland
 *
 * Main module of the application.
 */

var app = angular.module("algoland", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "hc.marked",
    "angularUtils.directives.dirDisqus"
]);

app.constant("hljs", window.hljs)
    .constant("jQuery", window.jQuery)
    .constant("appConfig", {
        algosUrl: "algos/catalog.json",
        algoInfoUrl: "algos/{category}/{algo}.md",

        github: "tabalinas/algoland.net",
        twitter: "algolandnet",

        routes: [
            { url: "/", view: "views/main.html", controller: "MainCtrl", title: "Home", root: true },
            { url: "/algo", view: "views/algo.html", controller: "AlgoCtrl", title: "Algorithms", root: true },
            { url: "/algo/:algo", view: "views/algo-info.html", controller: "AlgoInfoCtrl" },
            { url: "/about", view: "views/about.html", controller: "AboutCtrl", title: "About", root: true },
            { url: "/search/:query", view: "views/search.html", controller: "SearchCtrl", title: "Algorithms Search" }
        ]
    });

app.config(function($routeProvider, appConfig) {
        angular.forEach(appConfig.routes, function(route) {
            $routeProvider
                .when(route.url, {
                    title: route.title,
                    templateUrl: route.view,
                    controller: route.controller
                });
        });

        $routeProvider.otherwise({
            redirectTo: "/"
        });
    })
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .config(function(markedProvider, hljs) {
        markedProvider.setOptions({
            gfm: true,
            tables: true,
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            }
        });
    });

app.run(["$location", "$rootScope", function($location, $rootScope) {
    $rootScope.$on("$routeChangeSuccess", function(event, current) {
        $rootScope.title = current.$$route.title;
    });
}]);
