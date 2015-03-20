"use strict";

describe("algoService", function() {

    var algoService;
    var httpBackend;

    var mockAlgoCatalog = [{
        name: "cat-1",
        description: "description cat-1",
        algos: [
            { name: "algo1-1", description: "description algo1-1" },
            { name: "algo1-2", description: "description algo1-2" }
        ]
    }, {
        name: "cat-2",
        algos: [
            { name: "algo2-1", description: "description algo2-1" },
            { name: "algo2-2" }
        ]
    }];


    beforeEach(module("algoland"));

    beforeEach(inject(function(_algoService_, $httpBackend, appConfig) {
        algoService = _algoService_;
        httpBackend = $httpBackend;

        $httpBackend.whenGET(appConfig.algosUrl).respond(mockAlgoCatalog);
    }));

    it("should return algo catalog", function() {
        algoService.getAlgos().then(function(catalog) {
            expect(catalog).toEqual([{
                name: "cat-1",
                title: "Cat 1",
                description: "description cat-1",
                algos: [
                    { name: "algo1-1", title: "Algo1 1", description: "description algo1-1" },
                    { name: "algo1-2", title: "Algo1 2", description: "description algo1-2" }
                ]
            }, {
                name: "cat-2",
                title: "Cat 2",
                description: undefined,
                algos: [
                    { name: "algo2-1", title: "Algo2 1", description: "description algo2-1" },
                    { name: "algo2-2", title: "Algo2 2", description: undefined }
                ]
            }]);
        });

        httpBackend.flush();
    });

});
