'use strict';

var navController = angular.module("app").controller('NavController', ['$scope', '$location',
function ($scope, $location) {

      // used to add the class to the rollover when about clicked
      $scope.aboutClass = null;

      // used to determine if the user is on/off the home page
      $scope.isHome = $location.path() == '/';

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
