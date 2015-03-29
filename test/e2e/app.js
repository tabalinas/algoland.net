"use strict";

describe("Algoland.net App", function() {
    it("should have a title", function() {
        browser.get("");

        expect(browser.getTitle()).toBe('Algoland.net');
    });
});
