"use strict";

describe("al.footer", function() {

    var element;
    var compile;
    var scope;

    var createDirective = function() {
        element = angular.element("<al-footer></al-footer>");
        compile(element)(scope);
        scope.$digest();
    };


    beforeEach(module("algoland"));
    beforeEach(module("partials/footer.html"));

    beforeEach(inject(function($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    it("should render link to github", inject(function(appConfig) {
        var testAccount = "github_test";
        appConfig.github = testAccount;

        createDirective();

        var link = element.find(".footer-link-github");
        expect(link.text()).toBe(testAccount);
        expect(link.attr("href")).toBe("https://github.com/" + testAccount);
    }));

    it("should render link to twitter", inject(function(appConfig) {
        var testAccount = "twitter_test";
        appConfig.twitter = testAccount;

        createDirective();

        var link = element.find(".footer-link-twitter");
        expect(link.text()).toBe("@" + testAccount);
        expect(link.attr("href")).toBe("https://twitter.com/" + testAccount);
    }));

});


