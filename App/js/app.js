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
