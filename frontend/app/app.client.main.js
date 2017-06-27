'use strict';

function HeaderController($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}

function LoginCtrl($scope, $http) {
  $scope.login = function (username, password) {
    $http.post('/api/auth', { email: username, password: password })
      .then(
        function (res) {
          console.log(res);
          var token = res.data.token;
        },
        function (res) {
          console.log(res);
        }
      );
  };
}

function ShopCtrl($scope, $http) {
  $http.get('/api/movies')
    .then(
      function (res) {
        console.log(res.data);
        $scope.movies = res.data;
      },
      function (res) {
        console.log(res);
      }
    );
}

function UserCtrl($scope, $http) {
  $http.get('/api/user')
    .then(
      function (res) {
        console.log(res.data);
        $scope.user = res.data;
      },
      function (res) {
        console.log(res);
      }
    );
}

var MovieStar = angular.module('MovieStar', [
  'MovieStar.templates',
  'ngRoute']);

MovieStar
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
          controller: 'LoginCtrl',
          templateUrl: 'app/views/login.tpl.html',
        })
        .when('/register', {
          controller: 'TestCtrl2 as test2',
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
        .otherwise({ redirectTo: '/' });
  })
  .controller('LoginCtrl', LoginCtrl)
  .controller('UserCtrl', UserCtrl)
  .controller('MoviesCtrl', ShopCtrl)
  .controller('HeaderController', HeaderController);
