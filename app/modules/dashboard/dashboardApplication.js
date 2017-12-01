

var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial']);


dashboard.config(["$stateProvider", function ($stateProvider) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    $stateProvider.state('app.skills', {
        url: '/portfolio',
        templateUrl: 'app/modules/dashboard/views/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Portfolio'
        }
    });


    $stateProvider.state('app.education', {
        url: '/analysis',
        templateUrl: 'app/modules/dashboard/views/background.html',
        controller: 'BackgroundController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Dashboard Home'
        }
    });

    $stateProvider.state('app.achievements', {
        url: '/profile',
        templateUrl: 'app/modules/dashboard/views/profile.html',
        controller: 'AchievementsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Profile'
        }
    });

    $stateProvider.state('app.recent', {
        url: '/edit-current-portfolio',
        templateUrl: 'app/modules/dashboard/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Edit Portfolio'
        }
    });

    $stateProvider.state('app.experience', {
        url: '/transactions',
        templateUrl: 'app/modules/dashboard/views/transactions.html',
        controller: 'RecentController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Transactions'
        }
    });

    // Portfolio page state
    $stateProvider.state('app.about', {
        url: '/about',
        templateUrl: 'app/modules/dashboard/views/about.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Portfolio'
        }
    });

    //About Me page state
    $stateProvider.state('app.portfolio', {
        url: '/alerts',
        templateUrl: 'app/modules/dashboard/views/alerts.html',
        controller: 'WebsitesController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Alerts'
        }
    });


    //Contact page state
    $stateProvider.state('app.contact', {
        url: '/edit-current-portfolio',
        templateUrl: 'app/modules/dashboard/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Contact Me'
        }
    });

    //Websites page state
    $stateProvider.state('app.websites', {
        url: '/data',
        templateUrl: 'app/modules/dashboard/views/data.html',
        controller: 'SkillsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Data'
        }
    });

    //Gallery page state
    /*$stateProvider.state('app.gallery', {
        url: '/gallery',
        templateUrl: 'app/modules/dashboard/views/gallery.html',
        controller: 'GalleryController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Gallery'
        }
    });*/

    //Search page state
    $stateProvider.state('app.search', {
        url: '/search',
        templateUrl: 'app/modules/dashboard/views/search.html',
        controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Search'
        }
    });

}]);

