angular.module('fable-on')
  .controller('Home', ['$scope', '$state', function($scope, $state) {
    $scope.start = function() {
      window.receiverGoTo('dwarfs');
      $state.go('dwarfs');
    };
  }])
  .controller('Dwarfs', ['$scope', '$state', function($scope, $state) {
    $scope.error = function() {
      window.receiverPlay(false);
      swal("Sbagliato!", null, "error");
    }

    $scope.good = function() {
      window.receiverPlay(true);
      swal({
          title: "Esatto!",
          type: "success",
          showCancelButton: false,
          closeOnConfirm: true
        },
        function() {
          window.receiverGoTo('grumpy');
          $state.go('grumpy');
        });
    }
  }])
  .controller('Grumpy', ['$scope', '$state', function($scope, $state) {
    $scope.error = function() {
      window.receiverPlay(false);
      swal("Sbagliato!", null, "error");
    }

    $scope.good = function() {
      window.receiverPlay(true);
      swal({
          title: "Esatto!",
          type: "success",
          showCancelButton: false,
          closeOnConfirm: true
        },
        function() {
          window.receiverGoTo('end');
          $state.go('end');
        });
    }
  }])
  .controller('End', ['$scope', function($scope) {

  }]);
