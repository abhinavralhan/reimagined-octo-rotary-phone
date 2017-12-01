
dashboard.controller("PortfolioController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    

    vm.portfolioData = [
        {
            image: "housewife",
            title: "Housewife"
        },
        {
            image: "student",
            title: "Student"
        },{
            image: "professional",
            title: "Professional"
        }
    ];

    vm.temp = [
        {
            n: 1,
            statee: false
        },
        {
            n: 2,
            statee: false
        },
        {
            n: 3,
            statee: false
        }
    ];

    console.log("coming to Portfolio controller");


}]);

