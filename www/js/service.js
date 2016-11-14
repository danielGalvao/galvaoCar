angular.module('starter')
.service('ServiceCar', function($http){
  var url = 'http://aluracar.herokuapp.com/';
  return {
    getCars: function(){
      return $http.get(url).then(function(resp){
        return resp.data;
      });
    }
  }
});
