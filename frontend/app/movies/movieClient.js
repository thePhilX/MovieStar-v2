var movieClient = angular.module('movieClient', []);

movieClient.factory('movieFactory', ['$http', '$location', function ($http, $location) {
  var movieFactory = {};

  movieFactory.getAllMovies = function () {
    var res = $http.get('/api/movies')
      .then(
        function (res) {
          $scope.movies = res.data;
        },
        function (res) {
          console.log(res);
        }
      );
    return res;
  };

  movieFactory.deleteMovie = function (id) {
    var res = $http.delete('api/movies/'+ id)

    return res;
  };

  return movieFactory;
}]);

movieClient.controller('movieCtrl', function ($scope, movieFactory) {
  movieFactory.getAllMovies();
});

movieClient.controller('movieDelCtrl', function ($scope, movieFactory) {
  movieFactory.deleteMovie($scope._id);
})
