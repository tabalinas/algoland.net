"use strict";

angular.module("algoland")
    .factory("algoService", function(appConfig, inflector, $http, $q) {
        return {
            getAlgos: function() {
                var result = $q.defer();
                var catalog = [];

                $http.get(appConfig.algosUrl).success(function(data) {
                    angular.forEach(data, function(category) {
                        catalog.push({
                            name: category.name,
                            title: inflector.titleize(category.name),
                            description: category.description,

                            algos: category.algos.map(function(algo) {
                                return {
                                    name: algo.name,
                                    title: inflector.titleize(algo.name),
                                    description: algo.description
                                };
                            })
                        });
                    });

                    result.resolve(catalog);
                });

                return result.promise;
            }
        };
    });
