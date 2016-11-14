angular.module('starter')
.controller('ListController', function($scope){
  $scope.carList = [{"name" : "BMW 120i" , "price" : 70000},
                    {"name" : "Onix 1.6" , "price" : 35000},
                    {"name" : "Fiesta 2.0", "price" : 52000},
                    {"name" : "C3 1.0", "price" : 22000},
                    {"name" : "Uno Fire", "price" : 11000},
                    {"name" : "Sentra 2.0", "price" : 53000},
                    {"name" : "Astra Sedan", "price" : 39000},
                    {"name" : "Vectra 2.0 Turbo", "price" : 37000},
                    {"name" : "Hilux 4x4", "price" : 90000},
                    {"name" : "Montana Cabine dupla", "price" : 57000},
                    {"name" : "Outlander 2.4" ,"price" : 99000},
                    {"name" : "Fusca 1500", "price" : 6000}];
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
  })
  .controller('FinishController',function($stateParams, $scope, $ionicPopup, $state){
    $scope.finishedCar = angular.fromJson($stateParams.car);
    $scope.finishOrder = function(){
      $ionicPopup.alert({
        title: 'Parabéns',
        template: 'Você acaba de comprar um '+$scope.finishedCar.name
      }).then(function(){
        $state.go('listagem');
      });
    }
  });
