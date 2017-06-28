'use strict';

function HeaderController($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}

function LoginCtrl($scope, $http, $rootScope) {
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
}

function ShopCtrl($scope, $http) {
  $http.get('/api/movies')
    .then(
      function (res) {
        $scope.movies = res.data;
      },
      function (res) {
        console.log(res);
      }
    );
}

function UserCtrl($scope, $http) {
  $http.get('/api/users')
    .then(
      function (res) {
        $scope.user = res.data[0];
        $scope.newUser = $scope.user;
        console.log($scope.user);
      },
      function (res) {
        console.log(res);
      }
    );
}
var MovieStar = angular.module('MovieStar', [
  'MovieStar.templates',
  'ngRoute',
  'register',
  'registerService',
]);
MovieStar
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        controller: 'LoginCtrl',
        templateUrl: 'app/views/login.tpl.html',
      })
      .when('/register', {
        templateUrl: 'app/views/register.tpl.html',
      })
      .when('/movies', {
        controller: 'MoviesCtrl',
        templateUrl: 'app/views/shop.tpl.html',
      })
      .when('/user', {
        controller: 'UserCtrl',
        templateUrl: 'app/views/profile.tpl.html',
      })
      .when('/cart', {
        templateUrl: 'app/views/cart.tpl.html',
      })
      .otherwise({
        redirectTo: '/',
      });
  })
  .controller('LoginCtrl', LoginCtrl)
  .controller('UserCtrl', UserCtrl)
  .controller('MoviesCtrl', ShopCtrl)
  .controller('HeaderController', HeaderController);
MovieStar.run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function (event) {
    if (!$rootScope.isAuth && !($location.path() === '/' || $location.path() === '/register')) {
      alert('Please login to see this page.');
      event.preventDefault();
      $location.path('/');
    }
  });
}]);
