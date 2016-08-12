angular.module('hello').controller('BasicGridController', [ '$scope', function($scope) {
	$scope.gridOptions = {
		data : [ {
			"firstName" : "Cox",
			"lastName" : "Carney",
			"company" : "Enormo",
			"employed" : true
		}, {
			"firstName" : "Lorraine",
			"lastName" : "Wise",
			"company" : "Comveyer",
			"employed" : false
		}, {
			"firstName" : "Nancy",
			"lastName" : "Waters",
			"company" : "Fuelton",
			"employed" : false
		} ]
	};

} ]);

angular
		.module('hello')
		.controller(
				'FooterGridController',
				[
						'$scope',
						'uiGridConstants',
						function($scope, uiGridConstants) {
							var data = [];
							
							$scope.gridOptions = {
								enableColumnResizing : true,
								showGridFooter : true,
								showColumnFooter : true,
								enableFiltering : true,
								enableGridMenu: true,
								enableColumnMenu : false,
								headerTemplate : 'view/ui-grid-header.html',
								columnDefs : [
										{
											field : 'name',
											width : '13%'
										},
										{
											field : 'address.street',
											aggregationType : uiGridConstants.aggregationTypes.sum,
											width : '13%',
											enableColumnMenu : false
										},
										{
											field : 'age',
											aggregationType : uiGridConstants.aggregationTypes.avg,
											aggregationHideLabel : true,
											width : '13%'
										},
										{
											name : 'ageMin',
											field : 'age',
											aggregationType : uiGridConstants.aggregationTypes.min,
											width : '13%',
											displayName : 'Age for min',
											headerCellTemplate : 'view/ui-grid-header-cell.html'
										},
										{
											name : 'ageMax',
											field : 'age',
											aggregationType : uiGridConstants.aggregationTypes.max,
											width : '13%',
											displayName : 'Age for max'
										},
										{
											name : 'customCellTemplate',
											field : 'age',
											width : '14%',
											footerCellTemplate : '<div class="ui-grid-cell-contents" style="background-color: Red;color: White">custom template</div>'
										}, {
											name : 'registered',
											field : 'registered',
											width : '20%',
											cellFilter : 'date',
											footerCellFilter : 'date',
											aggregationType : uiGridConstants.aggregationTypes.max
										} ],
								data : data,
								onRegisterApi : function(gridApi) {
									$scope.gridApi = gridApi;
								}
							};
						} ]);
