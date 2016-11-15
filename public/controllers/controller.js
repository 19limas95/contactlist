var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope','$http',
	function($scope,$http){
	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			$scope.contactlist = response;
			$scope.contact = "";
		});
	};
	refresh();
	
	console.log("hello world from controller");
	$http.get('/contactlist').success(function(response){
		
		$scope.contactlist = response;
	});
	
	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};
	
	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/'+ id).success(function(response){
			console.log(response);
			refresh();
		});
	}

	
}]);
//cd \Program Files\MongoDB\Server\3.2\bin
//cd \Desktop\nodeProject\contactlist