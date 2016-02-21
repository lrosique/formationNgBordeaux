describe('Menu component controller', function() {
  var MenuController;
  var $scope;
  var afMenu;

  beforeEach(module('af.menu'));
  beforeEach(inject(function($componentController, $rootScope, _afMenu_){
    $scope = $rootScope.$new();
    afMenu = _afMenu_;
    afMenu.menuItems.push({
      name: 'foo',
      state: 'bar'
    });
    MenuController = $componentController('afMenu', {
      $scope: $scope
    })

  }));

  it('should have a property items filled with meuProviders items', function() {
    expect(MenuController.items).toBe(afMenu.items)
  });
});
