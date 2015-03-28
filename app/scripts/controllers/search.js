"use strict";

/**
 * @ngdoc function
 * @name algoland.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the algoland
 */
angular.module("algoland")
    .controller("SearchCtrl", function(algoService, $routeParams, $scope) {
        var searchQuery = $routeParams.query;

        algoService.findAlgos(searchQuery).then(function(algos) {
            $scope.algos = algos;
        });
    });
