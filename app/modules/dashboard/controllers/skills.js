
dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash', 'SheetJSExportService', '$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash, SheetJSExportService, $http) {
    var vm = this;


    $scope.gridOptions = {
        columnDefs: [
            { field: 'name' },
            { field: 'gender', visible: false},
            { field: 'company' }
        ],
        enableGridMenu: true,
        enableSelectAll: true,
        exporterMenuPdf: false,
        exporterMenuCsv: false,
        showHeader: true,
        onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
        },
        /* SheetJS Service setup */
        filename: "SheetJSAngular",
        sheetname: "ng-SheetJS",
        gridMenuCustomItems: [
            {
                title: 'Export all data as XLSX',
                action: function ($event) { SheetJSExportService.exportXLSX($scope.gridApi); },
                order: 200
            },
            {
                title: 'Export all data as XLSB',
                action: function ($event) { SheetJSExportService.exportXLSB($scope.gridApi); },
                order: 201
            }
        ]
    };

    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json').success(function(data) { $scope.gridOptions.data = data; });


    vm.skills = {};

    //development stack
    vm.skills.development = [
        {
            theme: "yellow",
            image: "mongodb"
        },
        {
            theme: "aqua",
            image: "express"
        },
        {
            theme: "green",
            image: "angular"
        },
        {
            theme: "purple",
            image: "node"
        },
        {
            theme: "maroon",
            image: "javascript"
        },
        {
            theme: "teal",
            image: "typescript"
        },
        {
            theme: "yellow",
            image: "jquery"
        },
        {
            theme: "red",
            image: "joomla"
        }
    ];

    //Design Stack
    vm.skills.design = [
        {
            theme: "yellow",
            image: "html5"
        },
        {
            theme: "aqua",
            image: "css3"
        },
        {
            theme: "green",
            image: "saas-css"
        },
        {
            theme: "purple",
            image: "bootstrap"
        },
        {
            theme: "maroon",
            image: "Photoshop"
        },
        {
            theme: "teal",
            image: "coreldraw"
        },
        {
            theme: "yellow",
            image: "flash"
        }
    ];

    //Other Stack
    vm.skills.others = [
        {
            theme: "aqua",
            image: "java"
        },
        {
            theme: "purple",
            image: "sql"
        },
        {
            theme: "maroon",
            image: "hardware"
        },
        {
            theme: "yellow",
            image: "cloud"
        }
    ];
}]);

