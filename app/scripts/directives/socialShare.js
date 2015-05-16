"use strict";

angular.module("algoland")
    .directive("socialShare", function(jQuery) {
        return {
            restrict: "E",
            replace: true,
            link: function(scope, element) {
                jQuery(element).jsSocials({
                    showLabel: false,
                    shares: ["twitter", "facebook", "googleplus", "linkedin"]
                });
            }
        };
    });

