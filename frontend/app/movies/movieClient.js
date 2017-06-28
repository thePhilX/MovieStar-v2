var movieClient = angular.module('movieClient', []);
/* eslint-disable no-underscore-dangle */
movieClient.controller('movieCtrl', function ($scope, $http, $location, cartService) {
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
  $scope.buy = function (id) {
    console.log('Buy ' + id);
    cartService.addToCart(id);
  };
});
movieClient.controller('movieDelCtrl', function ($scope, $http) {
  $http.delete('api/movies/' + $scope.id);
});
movieClient.factory('cartService', function ($http, $location) {
  var updateCart = function (cartid, movieid) {
    $http.get('/api/cart/' + cartid)
      .then(
        function (res) {
          console.log(res);
          var updatedCart = res.data;
          updatedCart.movies.push(movieid);
          console.log(updatedCart);
          $http.put('/api/cart/' + cartid, updatedCart)
            .then(
              function (ires) {
                $location.path('/cart');
              },
              function (ires) {
                console.log(ires);
              }
            );
        },
        function (res) {
          console.log(res);
        }
      );
  };
  var addToCard = function (id) {
    $http.get('/api/cart')
      .then(
        function (res) {
          var currentcart = res.data.carts;
          var userid = res.data.userid;
          if (currentcart.length === 0) {
            var newCart = {
              userID: userid,
              movies: [],
              totalPrice: 0,
            };
            $http.post('/api/cart', newCart)
              .then(
                function (ires) {
                  console.log(ires);
                  updateCart(ires._id, id);
                },
                function (ires) {
                  console.log(ires);
                }
              );
          } else {
            console.log('Carts');
            var usecart = currentcart[0];
            updateCart(usecart._id, id);
          }
        },
        function (res) {
          console.log('Fails: ', res);
        }
      );
  };
  return {
    addToCard: addToCard,
  };
});
