"use strict";

describe("al.header", function() {

    var element;
    var compile;
    var scope;

    var createDirective = function() {
        element = angular.element("<al-header></al-header>");
        compile(element)(scope);
        scope.$digest();
    };


    beforeEach(module("algoland"));
    beforeEach(module("partials/header.html"));
    beforeEach(module("partials/search-bar.html"));

    beforeEach(inject(function($compile, $rootScope, appConfig) {
        compile = $compile;
        scope = $rootScope.$new();

        appConfig.routes = [
            { url: "/home", root: true, title: "Main" },
            { url: "/test/:id", root: false, title: "Test Details" },
            { url: "/test", root: true, title: "Test" }
        ];
    }));

    it("should render only root navigation items", function() {
        createDirective();

        var navItems = element.find("li");
        expect(navItems.length).toBe(2);
        expect(navItems.text()).toBe("MainTest");
    });

    it("should set active navigation item", inject(function($location) {
        $location.path("/test");

        createDirective();

        var activeItem = element.find(".active");
        expect(activeItem.length).toBe(1);
        expect(activeItem.text()).toBe("Test");
    }));

});
