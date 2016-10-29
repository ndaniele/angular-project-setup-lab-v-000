function MainController($scope) {
  $scope.name = 'Nick';
  $scope.name = 'e';
}

angular
  .module('app')
  .controller('MainController', MainController);
