angular.module('starter')
.controller('ListController', function($scope){
  $scope.carList = [{
    'name': 'BMW 120i',
    'price': 70000
  }];
});

angular.module('starter')
.controller('CarController', function($stateParams, $scope){

  $scope.selectedCar = angular.fromJson($stateParams.selectedCar);
  $scope.accessories = [{'name':'Freio ABS', 'price': 800},
                        {'name':'Ar Condiconado', 'price': 1000},
                        {'name':'MP3 Player', 'price': 500}
                        ];
  $scope.check = function(accessory, isChecked){
    if(isChecked) {
      $scope.selectedCar.price += accessory.price;
    }else {
      $scope.selectedCar.price -= accessory.price;
    }
  }
});
