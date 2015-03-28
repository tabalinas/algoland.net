"use strict";

/**
 * @ngdoc function
 * @name algoland.controller:AlgoCtrl
 * @description
 * # AlgoCtrl
 * Controller of the algoland
 */
angular.module("algoland")
    .controller("AlgoCtrl", function(algoService, $scope) {
        algoService.getAlgos().then(function(catalog) {
            $scope.catalog = catalog;
        });
    });
