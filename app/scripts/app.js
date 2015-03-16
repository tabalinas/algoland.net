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
    "ngTouch",
    "hc.marked"
]);

angular.module("algoland")
    .constant("hljs", window.hljs)
    .constant("appConfig", {
        algosUrl: "algos/catalog.json",
        algoInfoUrl: "algos/{category}/{algo}.md",

        github: "tabalinas",
        twitter: "artem_tabalin",

        routes: [
            { url: "/", view: "views/main.html", controller: "MainCtrl", title: "Home", root: true },
            { url: "/algo", view: "views/algo.html", controller: "AlgoCtrl", title: "Algorithms", root: true },
            { url: "/algo/:algo", view: "views/algo-info.html", controller: "AlgoInfoCtrl" },
            { url: "/about", view: "views/about.html", controller: "AboutCtrl", title: "About", root: true }
        ]
    });

angular.module("algoland")
    .config(function($routeProvider, appConfig) {
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
