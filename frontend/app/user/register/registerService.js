var registerService = angular.module('registerService', []);

registerService.factory('registerUser', ['$http', '$location', function ($http, $location) {
  var registerUser = {};

  registerUser.signup = function (email, password, firstName, familyName) {
    var test = $http.post('/api/users', {
      email: email,
      password: password,
      firstName: firstName,
      surName: familyName,
    });

    console.log(test);
    return test;
  };
  registerUser.sendToWelcome = function () {
    $location.path('/welcome');
  };

  return registerUser;
}]);
