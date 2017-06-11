angular.module('hello').controller('ComponentsController',
		[ '$scope', function($scope) {
			$scope.sayHello = function(name) {
				alert('hello ' + name + ', how are you!');
			};
		} ]);
