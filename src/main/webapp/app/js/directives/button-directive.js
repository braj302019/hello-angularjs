angular.module("hello").directive("myButton", function() {
	return {
		restrict : 'E',
		transclude : true,
		scope : {
			title : '@',
			onClick : '&'
		},
		templateUrl : '/app/components/button.html'
	};
});