"use strict";

/**
 * @ngdoc function
 * @name algoland.controller:AlgoInfoCtrl
 * @description
 * # AlgoInfoCtrl
 * Controller of the algoland
 */
angular.module("algoland")
    .controller("AlgoInfoCtrl", function(algoService, $routeParams, $scope, $location) {
        $scope.url = $location.absUrl();

        var algoName = $routeParams.algo;

        algoService.getAlgo(algoName).then(function(algo) {
            $scope.algo = algo;
            $scope.$root.title = algo.title;
        });
    });
