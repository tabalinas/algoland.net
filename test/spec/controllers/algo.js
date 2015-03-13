"use strict";

describe("Controller: AlgoCtrl", function () {

    // load the controller"s module
    beforeEach(module("algoland"));

    var AlgoCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AlgoCtrl = $controller("AlgoCtrl", {
            $scope: scope
        });
    }));

    it("should work", function () {
        expect(true).toBe(true);
    });
});
