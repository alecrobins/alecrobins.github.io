'use strict';

var contactController = angular.module("app").controller('ContactController', ['$scope', '$location', '$http',
function ($scope, $location, $http) {

			// orginally set contact form to null
			$scope.form = {
				"subject": null,
				"name": null,
				"email": null,
				"message": null
			};

			//body of the email
			var htmlBody = '<div>Name: ' + $scope.form.name + '</div>' +
			'<div>Email: ' + $scope.form.email + '</div>' +
			'<div>Message: ' + $scope.form.message + '</div>' +
			'<div>Date: ' + (new Date()).toString() + '</div>';

			// submit the form
			$scope.submitForm = function () {

				console.log( $scope.form );

				//TODO: validate the form before submission

				$http({
					url: 'https://api.mailgun.net/v2/sandbox7635c75f66e54869a1547a7294da46f9.mailgun.org/messages',
					method: 'POST',
					data: {
						'From': 'foo@foo.com',
						'To': 'alecrobins@gmail.com',
						'HtmlBody': htmlBody,
						'Subject': 'New Contact Form Submission'
					},
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
					}
				}).
				success(function (data) {
					$scope.success = true;
					$scope.user = {};
				}).
				error(function (data) {
					$scope.error = true;
				});
			}



}]);
