'use strict';

angular.module("algoland")
    .directive("alHeader", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/templates/header.html",
            controller: function(appConfig, $location) {
                this.routes = appConfig.routes;

                this.isCurrentRoute = function(route) {
                    return route.url === $location.path();
                };
            },
            controllerAs: "header"
        };
    });

