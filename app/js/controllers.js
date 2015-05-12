'use strict';

/* Controllers */
angular
  .module('BeerControllers', [])
  .controller('BeerListCtrl', ['$scope', 'Beer',  function($scope, Beer) {
    /* List of beers */
      $scope.beers = Beer.query();

    /* order by */
    $scope.orderProp = 'alcohol';
    /* Name variable */
    $scope.name= "Angular beers";
  }])
.controller('BeerDetailCtrl', ['$scope', '$routeParams', 'Beer', function($scope, $routeParams, Beer) {

    $scope.beer = Beer.get({beerId: $routeParams.beerId}, function(beer) {
      $scope.mainImg = beer.img;
    });

    $scope.setImage = function(img) {
      $scope.mainImg = img;
    }
  }]);
