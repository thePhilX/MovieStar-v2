var movieClient = angular.module('movieClient', []);

movieClient.controller('movieCtrl', function ($scope, $http) {
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
});

movieClient.controller('movieDelCtrl', function ($scope, $http) {
  $http.delete('api/movies/' + $scope.id);
});
