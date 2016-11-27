(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController ($scope) {
    $scope.outputMessage = "";

    $scope.calculateAmount = function () {
      var inputFood, amount;
      inputFood = $scope.food
      if (inputFood === "" || inputFood === undefined) {
        amount = 0;
      }
      else {
        amount = inputFood.split(',').length;
      }
      displayOutputMessage(amount)
    }

    var displayOutputMessage = function (amount) {
      if (amount == 0) {
        $scope.outputMessage = "Please enter data"
      }
      else if (amount <= 3) {
        $scope.outputMessage = "Enjoy!"
      }
      else {
        $scope.outputMessage = "Too much!"
      }
    }
  }

})();
