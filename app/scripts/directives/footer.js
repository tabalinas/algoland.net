'use strict';

angular.module("algoland")
    .directive("alFooter", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/templates/footer.html",
            controller: function(appConfig) {
                this.date = new Date();
                this.github = appConfig.github;
                this.twitter = appConfig.twitter;
            },
            controllerAs: "footer"
        };
    });

