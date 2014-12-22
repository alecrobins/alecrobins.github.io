'use strict';

var protfolioController = angular.module("app").controller('ProtfolioController', ['$scope', '$window',
function ($scope, $window) {

		//break point for tablets
		var breakPoint = 992;

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
				$scope.currentProject = "Templates/projects/urlshortner.html";
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
					"images": ["Images/Freelance-Bg/bg-trending.jpg"],
					"selected": false, //used to show/hide projects in mobile mode
					"arrowClass": null, //helps animate the arrow when clicked
					"link": function (){ projectLink(this);}
				},
				{ "name": "Matt Robinson Tunes",
					"date": "Summer 2013",
					"url": "Templates/freelance/robinson.html",
					"class": "mattRobinson",
					"selected": false,
					"arrowClass": null, //helps animate the arrow when clicked
					"link": function (){ projectLink(this);}
				},
				{ "name": "bzar",
					"date": "Spring 2014",
					"url": "Templates/freelance/bzar.html",
					"class": "bzar",
					"selected": false,
					"arrowClass": null, //helps animate the arrow when clicked
					"link": function (){ projectLink(this);}
				},
				{ "name": "Nashville Social Group",
					"date": "Summer 2013",
					"url": "Templates/freelance/nsg.html",
					"class": "nsg",
					"selected": false,
					"arrowClass": null, //helps animate the arrow when clicked
					"link": function (){ projectLink(this);}
				},
				{ "name": "Michael Pollack Music",
					"date": "Spring 2013",
					"url": "Templates/freelance/michaelPollack.html",
					"class": "michaelPollack",
					"selected": false,
					"arrowClass": null, //helps animate the arrow when clicked
					"link": function (){ projectLink(this);}
				},
				{ "name": "Star City Inn & Suites",
					"date": "Summer 2013",
					"url": "Templates/freelance/starCity.html",
					"class": "starCity",
					"selected": false,
					"arrowClass": null, //helps animate the arrow when clicked
					"link": function (){ projectLink(this);}
				},
				{ "name": "LyfeBank Ohio",
					"date": "Summer 2012",
					"url": "Templates/freelance/lyfebank.html",
					"class": "lyfebank",
					"selected": false,
					"arrowClass": null, //helps animate the arrow when clicked
					"link": function (){ projectLink(this);}
				},
			];

		//list of all my projects
		$scope.projects =
		[
			// Url Shortner Project
			{ "name": "Url Shortner",
				"date": "Current Project",
				"url": "Templates/projects/urlshortner.html",
				"class": "urlShortner",
				"selected": false,
				"arrowClass": null, //helps animate the arrow when clicked
				"link": function (){ projectLink(this); }
			},
			// MovieJournal.me
			{ "name": "Movie Journal",
				"date": "Current Project",
				"url": "Templates/projects/movieJournal.html",
				"class": "movieJournal",
				"selected": false,
				"arrowClass": null, //helps animate the arrow when clicked
				"link": function (){ projectLink(this); }
			},
			// MovieJournal.me
			{ "name": "Bexley Senior Tag",
				"date": "Spring 2012",
				"url": "Templates/projects/bst.html",
				"class": "bst",
				"selected": false,
				"arrowClass": null, //helps animate the arrow when clicked
				"link": function (){ projectLink(this); }
			}
		];


		// list of images for the different projects

		$scope.gotoNextImage = function (project, index)
		{
			console.log(project);
			console.log(index);
			project[index].visible = false;
			index = (index + 1) % project.length;
			project[index].visible = true;
		}

			//BZAR images
		$scope.bzarImages = [
			{
				 "src": "Images/Freelance/Bzar/home.png",
				"visible": true,
				"index": 0
			},
			{
				"src": "Images/Freelance/Bzar/about.png",
				"visible": false,
				"index": 1
			},
			{
				"src": "Images/Freelance/Bzar/faq.png",
				"visible": false,
				"index": 2
			}
		];

		//BZAR images
		$scope.bzarImages = [
		{
			"src": "Images/Freelance/Bzar/home.png",
			"visible": true,
			"index": 0
		},
		{
			"src": "Images/Freelance/Bzar/about.png",
			"visible": false,
			"index": 1
		},
		{
			"src": "Images/Freelance/Bzar/faq.png",
			"visible": false,
			"index": 2
		}
		];

		//Trending images
		$scope.trendingImages = [
		{
			"src": "Images/Freelance/TrendingSounds/home.jpg",
			"visible": true,
			"index": 0
		}
		];

		//LyfeBank images
		$scope.lyfebankImages = [
		{
			"src": "Images/Freelance/LyfeBank/home.png",
			"visible": true,
			"index": 0
		}
		];

		//MattRobinson images
		$scope.robinsonImages = [
		{
			"src": "Images/Freelance/MattRobinson/home.png",
			"visible": true,
			"index": 0
		}
		];

		//NSG images
		$scope.nsgImages = [
		{
			"src": "Images/Freelance/NSG/home.png",
			"visible": true,
			"index": 0
		}
		];

		//NSG images
		$scope.nsgImages = [
		{
			"src": "Images/Freelance/NSG/home.png",
			"visible": true,
			"index": 0
		}
		];

		//NSG images
		$scope.pollackImages = [
		{
			"src": "Images/Freelance/Pollack/home.png",
			"visible": true,
			"index": 0
		}
		];

		//StarCity images
		$scope.starcityImages = [
		{
			"src": "Images/Freelance/StarCity/home.png",
			"visible": true,
			"index": 0
		}
		];

	////Projects

		//Movie Journal
		$scope.movieImages = [
		{
			"src": "Images/Project/MovieJournal/home.jpg",
			"visible": true,
			"index": 0
		}
		];

		//Bexley Senior Tag
		$scope.bstImages = [
		{
			"src": "Images/Project/BST/home.jpg",
			"visible": true,
			"index": 0
		}
		];



		//HELPER FUNCTIONS
			// set the current project to the project selected
			function projectLink(project){
					$scope.currentProject = project.url;

					// only set project selected when widht is less than the breaking point
					if($window.innerWidth < breakPoint)
					{
						project.selected = !project.selected; // swap

						if(project.arrowClass == null)
							 project.arrowClass = "arrowClicked";
						else
							project.arrowClass = null;

					}
			};
}]);
