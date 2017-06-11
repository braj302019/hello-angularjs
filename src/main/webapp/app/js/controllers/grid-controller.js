angular.module('hello').controller('TabsGridController',
		[ '$scope', '$http', function($scope, $http) {
			$scope.tabs = [ {
				title : 'Basic Grid',
				templateUrl : '/app/basic-grid.html',
				active : true
			}, {
				title : 'Custom Tree Grid',
				templateUrl : '/app/custom-tree-grid.html'
			} ];

			$scope.onDropComplete = function(index1, index2) {
				$scope.tabs[index1].index = index2;
				$scope.tabs[index2].index = index1;
			};
		} ]);

angular.module('hello').controller('BasicGridController',
		[ '$scope', '$http', function($scope, $http) {
			$scope.gridOptions = {
				data : []
			};
			$http.get('/app/data/500_complex.json').then(function(response) {
				$scope.gridOptions.data = response.data;
			});

		} ]);

angular
		.module('hello')
		.controller(
				'CustomTreeGridController',
				[
						'$scope',
						'uiGridConstants',
						'$http',
						'uiGridResizeColumnsService',
						function($scope, uiGridConstants, $http,
								uiGridResizeColumnsService) {
							$scope.gridOptions = {
								showGridFooter : true,
								showColumnFooter : true,
								enableFiltering : true,
								enableGridMenu : true,
								enableColumnMenu : false,
								enableRowSelection : true,
								showTreeExpandNoChildren : false,
								headerTemplate : '/app/view/ui-grid-header.html',
								columnDefs : [
										{
											field : 'name',
											cellTemplate : '/app/view/ui-grid-cell.html',
											width : 150,
										},
										{
											field : 'gender',
											enableColumnMenu : false,
											width : 100
										},
										{
											field : 'age',
											aggregationType : uiGridConstants.aggregationTypes.avg,
											aggregationHideLabel : true,
											width : 100
										},
										{
											name : 'company',
											field : 'company',
											footerCellTemplate : '<div class="ui-grid-cell-contents" style="background-color: Red;color: White">custom template</div>'
										} ],
								gridMenuCustomItems : [ {
									title : 'Rotate Grid',
									action : function($event) {
										this.grid.element
												.toggleClass('rotated');
									},
									order : 210
								} ],
								onRegisterApi : function(gridApi) {
									$scope.gridApi = gridApi;

									this.columnDefs
											.forEach(function(colDef) {
												var service = uiGridResizeColumnsService;
											});
								},
								appScopeProvider : {
									markedCells : {},
									toggleCellMarked : function(row, col) {
										var cellKey = row.entity.id + '-'
												+ col.colDef.field;
										row.grid.appScope.markedCells[cellKey] = !row.grid.appScope.markedCells[cellKey];
									},
									isCellMarked : function(row, col) {
										var cellKey = row.entity.id + '-'
												+ col.colDef.field;
										return !!row.grid.appScope.markedCells[cellKey];
									}
								}
							};

							$http
									.get('/app/data/500_complex.json')
									.then(
											function(response) {
												var data = response.data;
												for (var i = 0; i < data.length; i++) {
													data[i].state = data[i].address.state;
													data[i].balance = Number(data[i].balance
															.slice(1).replace(
																	/,/, ''));
												}
												data[0].$$treeLevel = 0;
												data[1].$$treeLevel = 1;
												data[10].$$treeLevel = 1;
												data[11].$$treeLevel = 1;
												data[20].$$treeLevel = 0;
												data[25].$$treeLevel = 1;
												data[50].$$treeLevel = 0;
												data[51].$$treeLevel = 0;
												$scope.gridOptions.data = data;
											});

						} ]);
