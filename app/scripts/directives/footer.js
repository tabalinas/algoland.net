angular.module("algoland")
    .directive("alFooter", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/footer.html",
            controller: function() {
                this.date = new Date();
            },
            controllerAs: "footer"
        };
    });

