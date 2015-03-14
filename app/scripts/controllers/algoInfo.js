"use strict";

/**
 * @ngdoc function
 * @name algoland.controller:AlgoInfoCtrl
 * @description
 * # AlgoInfoCtrl
 * Controller of the algoland
 */
angular.module("algoland")
    .controller("AlgoInfoCtrl", function(algoService, $routeParams, $scope) {
        var algoName = $routeParams.algo;

        algoService.getAlgo(algoName).then(function(algo) {
            $scope.algo = algo;
        }, function() {
            $scope.algo = {};
        });
    });
