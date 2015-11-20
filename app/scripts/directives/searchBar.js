"use strict";

angular.module("algoland")
    .directive("alSearchBar", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "partials/search-bar.html",
            controller: function(_, algoService, $location) {
                this.searchQuery = "";

                this.search = angular.bind(this, function() {
                    $location.path("search/" + this.searchQuery);
                });

                this.algoNames = [];

                algoService.getAlgosList().then(angular.bind(this, function(algos) {
                    this.algoNames = _.map(algos, function(algo) {
                        return algo.title;
                    });
                }));
            },
            controllerAs: "searchBar"
        };
    });

