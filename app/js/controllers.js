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
  .controller('BeerDetailCtrl',['$scope','$routeParams', '$http',function($scope, $routeParams, $http){
    $http.get('beers/'+$routeParams.beerId + '.json').success(function(data){
        $scope.beer = data;
        $scope.mainImg = $scope.beer.img;

        $scope.setImage = function(img){
            $scope.mainImg = img;
        }

        $scope.hello = function(name) {
            alert('Hello ' + (name || 'world') + '!');
        }
    });
  }]);
