'use strict';

var navController = angular.module("app").controller('NavController', ['$scope', '$location', '$rootScope',
function ($scope, $location, $rootScope) {

      $scope.navHeight = "40px";

      // used to dynamically change the slide animations between pages

      var contactAnimation = {
        "home": "slideDown",
        "about": "slideDown",
        "protfolio": "slideDown",
        "contact": "slideUp"
      };

      var defaultAnimation = {
        "home": "slideRight",
        "about": "slideRight",
        "protfolio": "slideLeft",
        "contact": "slideUp"
      };

      $scope.slide = {
        "home": "slideRight",
        "protfolio": "slideLeft",
        "contact": "slideUp"
      };

      // used to determine if the user is on/off the home page
      $scope.isHome = function () {

          return $location.path() == '/';
      };


      //show about when clicked
      $scope.showAbout = function () {

        if($rootScope.aboutClick == null)
            $rootScope.aboutClick = "aboutClass";
        else
            $rootScope.aboutClick = null;
      }

	//nav links
    $scope.go = function (path, pageAnimationClass) {

      if (typeof(pageAnimationClass) === 'undefined')
      { // Use a default, your choice
        $rootScope.pageAnimationClass = 'crossFade';
      }
      else
      { // Use the specified animation
        $rootScope.pageAnimationClass = pageAnimationClass;
      }

      if (path === 'back') { // Allow a 'back' keyword to go to previous page
        $window.history.back();
      }
      else { // Go to the specified path

        // check if contact to change the animations
        if(path == '/contact')
          {
            $scope.slide = contactAnimation;
          }
        else
          {
            $scope.slide = defaultAnimation;
          }
        // reset mobile animation
        $scope.navHeight = "40px";
        $location.path(path);

      }
    };

  //Mobile Menu
  $scope.mobileMenuClick = function() {
    //swap on click
    if($scope.navHeight == "40px")
        $scope.navHeight = "210px";
    else
        $scope.navHeight = "40px";
  }


}]);
