"use strict";

/**
 * @ngdoc function
 * @name algoland.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the algoland
 */
angular.module("algoland")
    .controller("SearchCtrl", function(_, algoService, $routeParams, $scope) {
        var searchQuery = $routeParams.query;

        $scope.searchQuery = searchQuery;

        var searchRegExp = new RegExp(searchQuery, "gi");
        var searchHighlightReplacer = function(match) {
            return "<span class='found-highlight'>" + match + "</span>";
        };

        algoService.findAlgos(searchQuery).then(function(algos) {
            $scope.algos = _.map(algos, function(algo) {
                algo.title = algo.title.replace(searchRegExp, searchHighlightReplacer);
                algo.description = algo.description.replace(searchRegExp, searchHighlightReplacer);
                return algo;
            });
        });
    });
