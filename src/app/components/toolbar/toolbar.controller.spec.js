describe('toolbar component controller', function() {
  var ToolbarController;
  var $scope;
  var $auth;
  var $state;

  beforeEach(module('af.toolbar'));
  beforeEach(inject(function($componentController, $rootScope, _$auth_, _$state_){
    $scope = $rootScope.$new();
    $auth = _$auth_;
    $state = _$state_;

    ToolbarController = $componentController('afToolbar', {
      $scope: $scope
    });
    spyOn($auth, 'logout').and.callFake(function() {});
    spyOn($state, 'go').and.callFake(function(){});

  }));

  it('should call the logout ahd go methods when logout', function() {
    ToolbarController.logout();
    expect($auth.logout).toHaveBeenCalled();
    expect($state.go).toHaveBeenCalled();
  });
});
