angular.module("hello").controller("FilterController",
		[ '$scope', '$filter', function($scope, $filter) {

			$scope.searchBy = '$';
			$scope.captures = [ {
				birdName : 'Wing',
				place : 'Alabama'
			}, {
				birdName : 'Birdeye',
				place : 'Arkansas'
			}, {
				birdName : 'Birdsong',
				place : 'Arkansas'
			}, {
				birdName : 'Little Flock',
				place : 'Arkansas'
			}, {
				birdName : 'Birds Landing',
				place : 'California'
			} ];

		} ]);