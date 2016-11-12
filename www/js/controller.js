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
});
