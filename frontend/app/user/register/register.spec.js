describe('Register Factory', function() {
  var $rootScope;
  var $scope;
  var $httpBackend;
  var controller;

  beforeEach(module('register'));

  beforeEach(inject(function (_$rootScope_, _$httpBackend_, $controller) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;
    controller = $controller('registerCtrl', {
      $scope: $scope,
    });
    $scope.user.email = "",
    $scope.user.password = "",
    $scope.user.firstName = "",
    $scope.user.surName = "",
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });
});
