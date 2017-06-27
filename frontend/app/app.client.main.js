'use strict';

function TestCtrl($templateCache) {
  this.user = { name: 'Blake' };

  console.log($templateCache.get('app/views/register.tpl.html'));
}

function TestCtrl2($templateCache) {
  this.user = { name: 'Blake' };

  console.log($templateCache.get('app/views/register.tpl.html'));
}

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
        .when('/cart', {
          templateUrl: 'app/views/cart.tpl.html',
        })
        .when('/about', { template: 'Über unsere Pizzeria' })
        .otherwise({ redirectTo: '/' });
  })
  .controller('LoginCtrl', LoginCtrl)
  .controller('MoviesCtrl', ShopCtrl)
  .controller('TestCtrl', TestCtrl)
  .controller('HeaderController', HeaderController)
  .controller('TestCtrl2', TestCtrl2);
