'use strict';

var protfolioController = angular.module("app").controller('ProtfolioController', ['$scope',
function ($scope) {

		// set the defalut currentProject ot trending sounds
		$scope.currentProject = "Templates/freelance/trendingSounds.html";
		$scope.showFreelance = true; // default to show freelance
		$scope.showProjects = false; //don't show projects

		$scope.freelanceSelect = function() {
			if($scope.showFreelance){
				return "clNavSelected"; //return the selected class
			}else{
				return "clNavNotSelected";
			}
		}

		$scope.projectSelect = function() {
			if($scope.showProjects){
				return "clNavSelected"; //return the selected class
			}else{
				return "clNavNotSelected";
			}
		}

		//swap the flags for showing freelance/projects
		$scope.swap = function() {
			$scope.showFreelance = !($scope.showFreelance);
			$scope.showProjects = !($scope.showProjects);

			//reset default loaded projects
			if($scope.showProjects){
				$scope.currentProject = "Templates/projects/project1.html";
			}else{
				$scope.currentProject = "Templates/freelance/trendingSounds.html";
			}
		}

		//list of all my freelance work
		$scope.freelance = [
			// Trending Sounds Project
				{ "name": "Trending Sounds Entertainment",
					"date": "Summer 2014",
					"url": "Templates/freelance/trendingSounds.html",
					"class": "trendingSounds",
					"link": function (){ projectLink(this);}
				},
				{ "name": "Matt Robinson Tunes",
					"date": "Summer 2013",
					"url": "Templates/freelance/robinson.html",
					"class": "mattRobinson",
					"link": function (){ projectLink(this);}
				},
				{ "name": "Nashville Social Group",
					"date": "Summer 2013",
					"url": "Templates/freelance/nsg.html",
					"class": "nsg",
					"link": function (){ projectLink(this);}
				},
				{ "name": "bzar",
					"date": "Spring 2014",
					"url": "Templates/freelance/bzar.html",
					"class": "bzar",
					"link": function (){ projectLink(this);}
				},
				{ "name": "Michael Pollack Music",
					"date": "Spring 2013",
					"url": "Templates/freelance/michaelPollack.html",
					"class": "michaelPollack",
					"link": function (){ projectLink(this);}
				},
				{ "name": "Star City Inn & Suites",
					"date": "Summer 2013",
					"url": "Templates/freelance/starCity.html",
					"class": "starCity",
					"link": function (){ projectLink(this);}
				},
				{ "name": "LyfeBank Ohio",
					"date": "Summer 2012",
					"url": "Templates/freelance/lyfebank.html",
					"class": "lyfebank",
					"link": function (){ projectLink(this);}
				},
			];

		//list of all my projects
		$scope.projects =
		[
			// Trending Sounds Project
			{ "name": "Project 1",
				"date": "Summer 2014",
				"url": "Templates/projects/project1.html",
				"class": "projectTest",
				"link": function (){ projectLink(this); }
			},
			// Trending Sounds Project
			{ "name": "Project 2",
				"date": "Summer 2014",
				"url": "Templates/projects/project1.html",
				"class": "projectTest",
				"link": function (){ projectLink(this); }
			}
		];

		//HELPER FUNCTIONS
			// set the current project to the project selected
			function projectLink(project){
					$scope.currentProject = project.url;
			};
}]);
