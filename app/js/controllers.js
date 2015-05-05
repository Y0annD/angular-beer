'use strict';

/* Controllers */
angular
  .module('BeerControllers', [])
  .controller('BeerListCtrl', ['$scope', '$http',  function($scope, $http) {
    /* List of beers */
    $http.get('beers/beers.json').success(function(data, status){
      $scope.beers = data;
    })
    .error(function(data, status){
      alert("error: "+status);
    });

    /* order by */
    $scope.orderProp = 'alcohol';
    /* Name variable */
    $scope.name= "Angular beers";
  }])
  .controller('BeerDetailCtrl',['$scope','$routeParams', function($scope, $routeParams){
    $scope.beerId = $routeParams.beerId;
  }]);
