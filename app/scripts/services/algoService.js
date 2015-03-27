"use strict";

angular.module("algoland")
    .factory("algoService", function(appConfig, inflector, $http, $q) {

        var loadCatalog = function() {
            var deferred = $q.defer();
            var result = [];

            $http.get(appConfig.algosUrl)
                .success(function(data) {
                    angular.forEach(data, function(category) {
                        result.push(mapCategory(category));
                    });
                    deferred.resolve(result);
                })
                .error(function() {
                    deferred.resolve(result);
                });

            return deferred.promise;
        };

        var mapCategory = function(category) {
            return {
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
            };
        };

        var getAlgos = function() {
            var result = $q.defer();

            loadCatalog().then(function(algos) {
                result.resolve(algos);
            });

            return result.promise;
        };

        var findAlgoCategory = function(algoName) {
            var result = $q.defer();

            loadCatalog().then(function(algos) {
                for(var catIndex = 0; catIndex < algos.length; catIndex++) {
                    var cat = algos[catIndex];

                    for(var algoIndex = 0; algoIndex < cat.algos.length; algoIndex++) {
                        var algo = cat.algos[algoIndex];
                        if(algo.name === algoName) {
                            result.resolve(cat);
                            return;
                        }
                    }
                }
            });

            return result.promise;
        };

        var getAlgo = function(algoName) {
            var result = $q.defer();

            findAlgoCategory(algoName).then(function(category) {
                result.resolve({
                    name: algoName,
                    title: inflector.titleize(algoName),
                    url: appConfig.algoInfoUrl.replace("{category}", category.name).replace("{algo}", algoName)
                });
            });

            return result.promise;
        };

        var findAlgos = function(searchValue) {
            var result = $q.defer();
            var searchResult = [];

            var searchIn = function(source) {
                return source && source.indexOf(searchValue) >= 0;
            };

            loadCatalog().then(function(catalog) {
                angular.forEach(catalog, function(category) {
                    angular.forEach(category.algos, function(algo) {
                        if(searchIn(algo.title) || searchIn(algo.description)) {
                            searchResult.push($.extend({
                                category: category.title
                            }, algo));
                        }
                    });
                });

                result.resolve(searchResult);
            });

            return result.promise;
        };

        return {
            getAlgos: getAlgos,
            getAlgo: getAlgo,
            findAlgos: findAlgos
        };
    });
