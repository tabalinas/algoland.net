"use strict";

angular.module("algoland")
    .directive("alAlgo", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "partials/algo.html",
            scope: {
                showCategory: '=',
                algo: '='
            },
            link: function(scope, element, attrs){
                scope.showCategory = scope.showCategory !== undefined ? scope.showCategory : true;
            }
        };
    });

