angular.module(
		'hello',
		[ 'ui.bootstrap', 'ngRoute', 'ngDraggable', 'dndLists', 'ntt.TreeDnD',
				'ui.grid', 'ui.grid.treeView', 'ui.grid.resizeColumns',
				'ui.grid.moveColumns', 'ui.grid.selection',
				'ui.grid.autoResize' ]).config(
		[ '$routeProvider', function config($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : '/app/hello.html',
				controller : 'HelloController'
			}).when('/filter', {
				templateUrl : '/app/filter.html',
				controller : 'FilterController'
			}).when('/dnd-lists', {
				templateUrl : '/app/dnd-lists.html',
				controller : 'DndListsController'
			}).when('/dnd-tree', {
				templateUrl : '/app/dnd-tree.html',
				controller : 'DndTreeController'
			}).when('/ui-grid', {
				templateUrl : '/app/tabs.html',
				controller : 'TabsGridController'
			}).when('/components', {
				templateUrl : '/app/components.html',
				controller : 'ComponentsController'
			});
		} ]);
