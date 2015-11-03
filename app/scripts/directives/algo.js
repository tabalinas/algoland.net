"use strict";

angular.module("algoland")
    .directive("alAlgo", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "partials/algo.html"
        };
    });

