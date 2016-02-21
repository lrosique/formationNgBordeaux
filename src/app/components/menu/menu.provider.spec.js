describe('Menu provider', function() {
  var afMenuProvider;
  var afMenu;
  var menuItem = {
    name: 'foo',
    state: 'bar'
  };
  beforeEach(module('af.menu'));
  beforeEach(function(){
    module(function(_afMenuProvider_){
      afMenuProvider = _afMenuProvider_;
    });
  });
  beforeEach(inject(function(_afMenu_) {
    afMenu = _afMenu_;
  }));


  it('should add an object to the menuItems array', function() {
    afMenuProvider.addMenuItem(menuItem);
    expect(afMenu.menuItems[0]).toBe(menuItem);
  });
});
