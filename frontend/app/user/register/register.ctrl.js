var register = angular.module('register', []);

register.controller('registerCtrl', function ($scope, registerUser) {
  $scope.submitRegistration = function () {
    console.log($scope.user.email, $scope.user.password);

    registerUser.signup(
      $scope.user.email,
      $scope.user.password,
      $scope.user.firstName,
      $scope.user.surName
    )
      .then(function (response) {
        var res = response.data;

        if (res.success === true) {
          registerUser.sendToWelcome();
        } else {
          $scope.asdf = 'Registration was unsuccessful, please try again.';
        }
      }, function (err) {
        console.log(err);
      });
  };
});
