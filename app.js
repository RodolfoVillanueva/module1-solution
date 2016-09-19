(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
	
	
	$scope.suma = ""
	$scope.lista = "";
	$scope.count = function () {
	if ($scope.lista.split(",").length < 4 && $scope.lista.length !== 0) {
		$scope.suma = "Enjoy!";	

	}
	if ($scope.lista.split(",").length >= 4) {
		$scope.suma = "Too much!";	
	}	
	
	if ($scope.lista.length ==0) {
		$scope.suma = "Please enter data first" ;	
	}
	
	};
}

})();