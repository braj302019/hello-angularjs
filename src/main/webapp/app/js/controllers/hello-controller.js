angular.module('hello').controller('HelloController', ['$scope', function($scope) {
	$scope.username = '';

	$scope.greet = function() {
		return 'Hello ' + $scope.username;
	};

	$scope.clear = function() {
		$scope.username = '';
	};
}]);
