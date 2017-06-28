'use strict';

function HeaderController($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}

function ShopCtrl($scope, $http, $state) {
  $http.get('/api/movies')
    .then(
      function (res) {
        $scope.movies = res.data;
        console.log($scope.movies);
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
  $scope.updateUser = function () {
    var user = $scope.newUser;
    /* eslint-disable no-underscore-dangle */
    $http.put('/api/users/' + user._id, user)
      .then(
        function (res) {
          console.log(res);
        },
        function (res) {
          console.log(res);
        }
      );
    /* eslint-enable no-underscore-dangle */
  };
}

function MovieDetailCtrl($scope, $http, $routeParams, $location) {
  $http.get('/api/movies/' + $routeParams.movieID)
    .then(
      function (res) {
        $scope.movie = res.data;
      },
      function (res) {
        console.log('Error' + res);
      }
    );
  $scope.redirectToShop = function () {
    $location.path('/movies/');
  };
}
var MovieStar = angular.module('MovieStar', [
  'MovieStar.templates',
  'ngRoute',
  'register',
  'registerService',
  'login',
  'movieClient',
]);
MovieStar
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/login.tpl.html',
      })
      .when('/register', {
        templateUrl: 'app/views/register.tpl.html',
      })
      .when('/movies', {
        templateUrl: 'app/views/shop.tpl.html',
      })
      .when('/movie/:movieID', {
        controller: 'MovieDetailCtrl',
        templateUrl: 'app/views/movieDetail.tpl.html',
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
  .controller('MovieDetailCtrl', MovieDetailCtrl)
  .controller('UserCtrl', UserCtrl)
  .controller('HeaderController', HeaderController);
MovieStar.run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function (event) {
    if (!$rootScope.isAuth && !($location.path() === '/' || $location.path() === '/register' || $location.path() === '')) {
      alert('Please login to see this page.');
      event.preventDefault();
      $location.path('/');
    }
  });
}]);
