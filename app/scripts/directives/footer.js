angular.module("algoland")
    .directive("alFooter", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/templates/footer.html",
            controller: function() {
                this.date = new Date();
            },
            controllerAs: "footer"
        };
    });

