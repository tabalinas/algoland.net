"use strict";

describe("algoService", function() {

    var algoService;
    var httpBackend;

    var mockAlgosUrl = "algos.json";
    var mockAlgoInfoUrl = "cat/{category}/algo/{algo}.md";

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

        appConfig.algosUrl = mockAlgosUrl;
        appConfig.algoInfoUrl = mockAlgoInfoUrl;

        $httpBackend.whenGET(mockAlgosUrl).respond(mockAlgoCatalog);
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

    it("should return algo by name", function() {
        algoService.getAlgo("algo2-1").then(function(algo) {
            expect(algo).toEqual({
                name: "algo2-1",
                title: "Algo2 1",
                url: "cat/cat-2/algo/algo2-1.md"
            });
        });

        httpBackend.flush();
    });

});
