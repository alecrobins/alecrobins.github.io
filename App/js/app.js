'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'Templates/home.html',
            controller: 'HomeController',
        })
				// route for the protfolio page
				.when('/protfolio', {
						templateUrl: 'Templates/protfolio.html',
						controller: 'ProtfolioController'
				})
}]);

app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

  'use strict';

  // global navigation for pages - used for animations
  $rootScope.go = function (path, pageAnimationClass) {

    if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
      $rootScope.pageAnimationClass = 'crossFade';
    }

    else { // Use the specified animation
      $rootScope.pageAnimationClass = pageAnimationClass;
    }

    if (path === 'back') { // Allow a 'back' keyword to go to previous page
      $window.history.back();
    }

    else { // Go to the specified path
      $location.path(path);
    }
  };

}]);
