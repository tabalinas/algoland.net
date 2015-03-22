"use strict";

describe("inflector", function() {

    var inflector;

    beforeEach(module("algoland"));

    beforeEach(inject(function(_inflector_) {
        inflector = _inflector_;
    }));

    it("dasharize", function() {
        expect(inflector.dasherize()).toBe("");
        expect(inflector.dasherize("test")).toBe("test");
        expect(inflector.dasherize("test 1")).toBe("test-1");
        expect(inflector.dasherize("testFooBar")).toBe("test-foo-bar");
        expect(inflector.dasherize("test_Foo_bar")).toBe("test-foo-bar");
        expect(inflector.dasherize("test-Foo-bar")).toBe("test-foo-bar");
        expect(inflector.dasherize("Test foo Bar")).toBe("test-foo-bar");
    });

    it("camelize", function() {
        expect(inflector.camelize()).toBe("");
        expect(inflector.camelize("test")).toBe("test");
        expect(inflector.camelize("test", true)).toBe("Test");
        expect(inflector.camelize("test 1")).toBe("test1");
        expect(inflector.camelize("testFooBar", true)).toBe("TestFooBar");
        expect(inflector.camelize("test-foo-bar")).toBe("testFooBar");
        expect(inflector.camelize("test_Foo_bar")).toBe("testFooBar");
        expect(inflector.camelize("Test foo Bar")).toBe("testFooBar");
    });

    it("humanize", function() {
        expect(inflector.humanize()).toBe("");
        expect(inflector.humanize("test")).toBe("Test");
        expect(inflector.humanize("test 1")).toBe("Test 1");
        expect(inflector.humanize("testFooBar")).toBe("Test foo bar");
        expect(inflector.humanize("test-foo-bar")).toBe("Test foo bar");
        expect(inflector.humanize("test_Foo_bar")).toBe("Test foo bar");
        expect(inflector.humanize("Test foo Bar")).toBe("Test foo bar");
    });

    it("titleize", function() {
        expect(inflector.titleize()).toBe("");
        expect(inflector.titleize("test")).toBe("Test");
        expect(inflector.titleize("test 1")).toBe("Test 1");
        expect(inflector.titleize("testFooBar")).toBe("Test Foo Bar");
        expect(inflector.titleize("test-foo-bar")).toBe("Test Foo Bar");
        expect(inflector.titleize("test_Foo_bar")).toBe("Test Foo Bar");
        expect(inflector.titleize("test Foo bar")).toBe("Test Foo Bar");
    });

    it("underscore", function() {
        expect(inflector.underscore()).toBe("");
        expect(inflector.underscore("test")).toBe("test");
        expect(inflector.underscore("test 1")).toBe("test_1");
        expect(inflector.underscore("testFooBar")).toBe("test_foo_bar");
        expect(inflector.underscore("test-Foo-bar")).toBe("test_foo_bar");
        expect(inflector.underscore("Test_foo_Bar")).toBe("test_foo_bar");
        expect(inflector.underscore("Test foo bar")).toBe("test_foo_bar");
    });

});

