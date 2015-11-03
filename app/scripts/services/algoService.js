"use strict";

angular.module("algoland")
    .factory("algoService", function(appConfig, inflector, $http, $q) {

        var loadCatalog = function(options) {
            options = options || {};
            var deferred = $q.defer();
            var result = [];

            $http.get(appConfig.algosUrl)
                .success(function(catalogJSON) {
                    angular.forEach(catalogJSON, function(categoryJSON) {
                        result.push.apply(result, mapCategory(categoryJSON, options.asTree));
                    });
                    deferred.resolve(result);
                })
                .error(function() {
                    deferred.resolve(result);
                });

            return deferred.promise;
        };

        var mapCategory = function(categoryJSON, asTree) {
            var category = {
                name: categoryJSON.name,
                title: categoryJSON.title || inflector.titleize(categoryJSON.name),
                description: categoryJSON.description
            };

            category.algos = categoryJSON.algos.map(function(algoJSON) {
                return {
                    name: algoJSON.name,
                    title: algoJSON.title || inflector.titleize(algoJSON.name),
                    description: algoJSON.description,
                    url: appConfig.algoInfoUrl.replace("{category}", category.name).replace("{algo}", algoJSON.name),
                    published: algoJSON.published ? new Date(algoJSON.published) : new Date(),
                    category: category
                };
            });

            return asTree ? [category] : category.algos;
        };

        var getAlgosTree = function() {
            var result = $q.defer();

            loadCatalog({ asTree: true }).then(function(algos) {
                result.resolve(algos);
            });

            return result.promise;
        };

        var getAlgo = function(algoName) {
            var result = $q.defer();

            loadCatalog().then(function(algos) {
                angular.forEach(algos, function(algo) {
                    if(algo.name === algoName) {
                        result.resolve(algo);
                    }
                });
            });

            return result.promise;
        };

        var findAlgos = function(searchQuery) {
            var result = $q.defer();

            var searchIn = function(source) {
                return source && source.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0;
            };

            loadCatalog().then(function(algos) {
                var searchResult = [];

                angular.forEach(algos, function(algo) {
                    if(searchIn(algo.title) || searchIn(algo.description)) {
                        searchResult.push(algo);
                    }
                });

                result.resolve(searchResult);
            });

            return result.promise;
        };

        var getLatestAlgos = function(amount) {
            var result = $q.defer();

            loadCatalog().then(function(algos) {
                algos.sort(function(alg1, alg2) {
                    return alg2.published - alg1.published;
                });

                result.resolve(algos.slice(0, amount - 1));
            });

            return result.promise;
        };

        return {
            getAlgosTree: getAlgosTree,
            getLatestAlgos: getLatestAlgos,
            getAlgo: getAlgo,
            findAlgos: findAlgos
        };
    });
