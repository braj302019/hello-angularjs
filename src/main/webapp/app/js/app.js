angular.module('hello', [ 'ngRoute', 'dndLists', 'ntt.TreeDnD', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns' ]).config(
	[ '$routeProvider', function config($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'hello.html',
			controller : 'HelloController'
		}).when('/dnd-lists', {
			templateUrl : 'dnd-lists.html',
			controller : 'DndListsController'
		}).when('/dnd-tree', {
			templateUrl : 'dnd-tree.html',
			controller : 'DndTreeController'
		}).when('/basic-grid', {
			templateUrl : 'grid.html',
			controller : 'BasicGridController'
		}).when('/footer-grid', {
			templateUrl : 'grid.html',
			controller : 'FooterGridController'
		});
	}]);
