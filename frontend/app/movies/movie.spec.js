describe('movieClient', function() {
  var $rootScope;
  var $scope;
  var $httpBackend;
  var controller;

  beforeEach(module('movieClient'));

  beforeEach(inject(function (_$rootScope_, _$httpBackend_, $controller) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;
    controller[0] = $controller('registerCtrl', {
      $scope: $scope,
    });
    controller[1] = $controller('movieDelCtrl', {
      $scope: $scope,
    });
    $scope.movies = [];
  }));

  it('should be defined', function () {
    expect(controller[0]).toBeDefined();
    expect(controller[1]).toBeDefined();
  });

  it('should be filled', function () {
    movieCtrl;
    expect($scope.movies).ToEqual($http.get('/api/movies')
      .then(
        function (res) {
          console.log(res.data);
          $scope.movies = res.data;
        },
        function (res) {
          console.log(res);
        }
      ));
  })
});
