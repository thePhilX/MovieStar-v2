describe('Login', function() {
  var $rootScope;
  var $scope;
  var $httpBackend;
  var controller;

  beforeEach(module('login'));

  beforeEach(inject(function (_$rootScope_, _$httpBackend_, $controller) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;
    controller = $controller('loginCtrl', {
      $scope: $scope,
    });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  it('should be false', function () {
    expect($rootScope.isAuth).toEqual(false);
  });
});
