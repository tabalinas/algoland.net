"use strict";

angular.module("algoland")
    .factory("inflector", function() {
        
        var ucfirst = function(str) {
            return (str || "").charAt(0).toUpperCase() + str.substr(1);
        };

        var chop = function(str) {
            return (str || "")
                .replace(/([a-z\d])([A-Z])/g, "$1 $2")
                .split(/[\s_-]+/);
        };

        return {
            dasherize: function(str) {
                return chop(str).map(function(p) {
                    return p.toLowerCase();
                }).join("-");
            },

            camelize: function(str, upperFirst) {
                return chop(str).map(function(s, index) {
                    s = s.toLowerCase();
                    return (upperFirst || index > 0) ? ucfirst(s) : s;
                }).join("");
            },

            humanize: function(str) {
                return ucfirst(this.dasherize(str).replace(/-/g, " "));
            },

            titleize: function(str) {
                return chop(str).map(function(s) {
                    return ucfirst(s.toLowerCase());
                }).join(" ");
            },

            underscore: function(str) {
                return this.dasherize(str).replace(/-/g, "_");
            }
        };
    });

