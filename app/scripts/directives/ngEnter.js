"use strict";

angular.module("algoland")
    .directive("ngEnter", function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                element.bind("keydown keypress", function(e) {
                    if(e.which === 13) {
                        scope.$apply(function() {
                            scope.$eval(attrs.ngEnter);
                        });
                        e.preventDefault();
                    }
                });
            }
        };
    });

