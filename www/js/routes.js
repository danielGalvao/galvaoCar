angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('list');
  $stateProvider
    .state('listagem', {
      url:'/list',
      templateUrl: 'templates/list.html',
      controller: 'ListController'
    })
    .state('car', {
      url:'/car/:selectedCar',
      templateUrl: 'templates/car.html',
      controller: 'CarController'
    });

})
