var movieClient = angular.module('movieClient', []);

movieClient.controller('movieCtrl', function ($scope, $http, $location) {
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
  $scope.go = function (movieID) {
    $location.path('/movie/' + movieID);
  };
});

movieClient.controller('movieDelCtrl', function ($scope, $http) {
  $http.delete('api/movies/' + $scope.id);
});
