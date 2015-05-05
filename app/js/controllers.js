'use strict';

/* Controllers */
angular
  .module('AngularBeer', [])
  .controller('BeerListCtrl', ['$scope', '$http',  function($scope, $http) {
    /* List of beers */
    $http.get('beers/beers.json').success(function(data, status){
      $scope.beers = data.splice(0, 5);;
    })
    .error(function(data, status){
      alert("error: "+status);
    });

    /* order by */
    $scope.orderProp = 'alcohol';
    /* Name variable */
    $scope.name= "Angular beers";
  }]);
