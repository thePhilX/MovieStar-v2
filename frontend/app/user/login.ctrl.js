var login = angular.module('login', []);

login.controller('loginCtrl', function LoginCtrl($scope, $http, $rootScope) {
  if (!$rootScope.isAuth) $rootScope.isAuth = false;
  $scope.login = function (username, password) {
    $http.post('/api/auth', { email: username, password: password })
    .then(
      function (res) {
        console.log(res);
        var token = res.data.token;
        $rootScope.isAuth = true;
        $http.defaults.headers.common.Authorization = res.data.token;
      },
      function (res) {
        console.log(res);
      }
    );
  };
  $scope.logout = function () {
    $rootScope.isAuth = false;
    $http.defaults.headers.common.Authorization = undefined;
  };
});
