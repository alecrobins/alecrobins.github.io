'use strict';

var navController = angular.module("app").controller('NavController', ['$scope', '$location',
function ($scope, $location) {

      // used to determine if the user is on/off the home page
      $scope.isHome = true;

	//nav links
      $scope.gotoProtfolio = function () {
          $scope.isHome = false;
          $location.path("/protfolio");
      };

      $scope.gotoHome = function () {
          $scope.isHome = true;
          $location.path("/");
      };

}]);
