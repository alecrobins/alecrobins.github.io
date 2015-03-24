'use strict';

var navController = angular.module("app").controller('NavController', ['$scope', '$location', '$rootScope',
function ($scope, $location, $rootScope) {

      // default height to 40px
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

      // passed in the go function on the navigation
      $scope.slide = {
        "home": "slideRight",
        "protfolio": "slideLeft",
        "contact": "slideUp"
      };

      // used to determine if the user is on/off the home page
      $scope.isHome = function () {
          return $location.path() == '/';
      };

	//nav links - determine which animation to run on click based on the current page
    $scope.go = function (path, pageAnimationClass) {

      if (typeof(pageAnimationClass) === 'undefined')
      { // Use a default, your choice
        $rootScope.pageAnimationClass = 'slideRight';
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
        //go to the path
        $location.path(path);

      }
    };

  //Mobile Menu - swap the max-height on click
  // animations are handled by CSS
  $scope.mobileMenuClick = function() {
    //swap on click
    if($scope.navHeight == "40px")
        $scope.navHeight = "210px";
    else
        $scope.navHeight = "40px";
  }


}]);
