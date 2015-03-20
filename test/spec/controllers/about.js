"use strict";

describe("Controller: AboutCtrl", function () {

    beforeEach(module("algoland"));

    var AboutCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller("AboutCtrl", {
            $scope: scope
        });
    }));

    it("should work", function () {
        expect(true).toBe(true);
    });
});
