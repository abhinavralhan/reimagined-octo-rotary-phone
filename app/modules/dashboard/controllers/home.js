
dashboard.controller("HomeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.showDetails = true;
    vm.home = {};
    
    vm.home.mainData = [
        {
            title: "Create your Portfolio",
            value: "5+",
            theme: "aqua",
            icon: "puzzle-piece"
        },
        {
            title: "Analyse your Data",
            value: "",
            theme: "red",
            icon: "paint-brush"
        },
        {
            title: "Manage Transactions",
            value: "",
            theme: "green",
            icon: "trophy"
        },
        {
            title: "Add your own Data",
            value: "",
            theme: "yellow",
            icon: "glass"
        },
    ];

    //skills progress bar
    vm.home.skills = [
        {
            title: "Grocery",
            theme: "aqua",
            percentage:90
        },
        {
            title: "Dining out",
            theme: "red",
            percentage: 63
        },
        {
            title: "Home Expenses",
            theme: "green",
            percentage: 85
        },
        {
            title: "Medicines",
            theme: "yellow",
            percentage: 75
        },
        {
            title: "Personal",
            theme: "aqua",
            percentage: 100
        },
        {
            title: "Travel",
            theme: "yellow",
            percentage: 75
        }
    ];


    //Tools I use Carousel
    $("#owl-demo").owlCarousel({


        items: 8, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#owl-demo").trigger('owl.play', 2000);

    // Custom Navigation Events
    $(".next").click(function () {
        $("#owl-demo").trigger('owl.next');
    })
    $(".prev").click(function () {
        $("#owl-demo").trigger('owl.prev');
    })
    $(".play").click(function () {
        $("#owl-demo").trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        $("#owl-demo").trigger('owl.stop');
    })

    //cartoon photo slider carosusel
    $("#owl-single").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000, //Set AutoPlay to 3 seconds
    });
}]);

