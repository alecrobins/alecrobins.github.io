'use strict';

var navController = angular.module("app").controller('NavController', ['$scope', '$location',
function ($scope, $location) {

	//nav links
      $scope.gotoProtfolio = function () {
					//console.log("Hi Abby!!!!");
          $location.path("/protfolio");
      };

}]);
