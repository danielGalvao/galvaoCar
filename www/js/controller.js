angular.module('starter')
.controller('ListController', function($scope, ServiceCar){
  ServiceCar.getCars().then(function(cars){
    $scope.carList = cars;
  });
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
        $scope.selectedCar.preco += accessory.price;
      }else {
        $scope.selectedCar.preco -= accessory.price;
      }
    }
  })
  .controller('FinishController',function($stateParams, $scope, $ionicPopup, $state){
    $scope.finishedCar = angular.fromJson($stateParams.car);
    $scope.finishOrder = function(){
      $ionicPopup.alert({
        title: 'Parabéns',
        template: 'Você acaba de comprar um '+$scope.finishedCar.nome
      }).then(function(){
        $state.go('listagem');
      });
    }
  });
