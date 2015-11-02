"use strict";

/**
 * @ngdoc function
 * @name algoland.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the algoland
 */
angular.module("algoland")
    .controller("MainCtrl", function($scope, appConfig, algoService) {
        algoService.getLatestAlgos(appConfig.latestAlgosAmount).then(function(algos) {
            $scope.latestAlgos = algos;
        });
    });
