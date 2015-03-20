"use strict";

angular.module("algoland")
    .directive("alHeader", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "partials/header.html",
            controller: function(appConfig, $location) {
                this.routes = appConfig.routes;

                this.isRoot = function(route) {
                    return route.root;
                };

                this.isCurrentRoute = function(route) {
                    return route.url === $location.path();
                };
            },
            controllerAs: "header"
        };
    });

