"use strict";

describe("al.searchBar", function() {

    var element,
        compile,
        scope;

    var createDirective = function() {
        element = angular.element("<al-search-bar></al-search-bar>");
        compile(element)(scope);
        scope.$digest();
    };


    beforeEach(module("algoland"));
    beforeEach(module("partials/search-bar.html"));

    beforeEach(inject(function($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    it("renders search input", function() {
        createDirective();

        var searchInput = element.find("input");
        expect(element.hasClass("search-bar")).toBe(true);
        expect(searchInput.length).toBe(1);
        expect(searchInput.hasClass("search-bar-input")).toBe(true);
    });

});
