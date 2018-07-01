
angular.module('todo', []).controller("TodoCtrl", function($scope, $http) {

  $scope.load = function ()  {
    $http.get('/todos').
      then(function(response) {
        $scope.todos = response.data;
      });

  };

  $scope.load();

  $scope.save = function ()  {
    $http.post('/todo', angular.toJson($scope.todo)).then(function (response) {
    	$scope.load();
    });
  };

  $scope.delete = function (id)  {
    $http.delete("/todo/" + id).then(function (response) {
    	$scope.load();
    });
  };
});

