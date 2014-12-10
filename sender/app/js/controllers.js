angular.module('fable-on')
.controller('Home', ['$scope','$state',function($scope,$state){
  $scope.start = function(){
    window.next();
    $state.go('start');
  };
}])
.controller('Start', ['$scope',function($scope){

}]);
