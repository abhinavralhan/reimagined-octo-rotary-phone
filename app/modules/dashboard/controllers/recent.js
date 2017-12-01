
dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    //var vm = this;


       $scope.invoice = {
            items: [{
                qty: 1,
                description: 'shoes',
                discount: 20,                  
                cost: 150,
                checked: true                  
            },
            {
                qty: 2,
                description: 'shirt',
                discount: 10,                  
                cost: 50,
                checked: true                  
            },
            {
                qty: 1,
                description: 'trousers ',
                discount: 50,                  
                cost: 120,
                checked: false                  
            },
            {
                qty: 1,
                description: 'sunglasses ',
                discount: 0,                  
                cost: 140,
                checked: true                  
            }]
        };

        $scope.addItem = function() {
            $scope.invoice.items.push({
                qty: 1,
                description: '',
                discount: 0,                  
                cost: 0,
                checked: true
            });
        },

        $scope.removeItem = function(index) {
            $scope.invoice.items.splice(index, 1);
        },

        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.invoice.items, function(item) {
              if(item.checked){
                total += (item.qty * item.cost) * (1 - item.discount/100);
              }
                total += 0;
            });
            return total;
        }
    
}]);


//    console.log("coming to Recent controller");


