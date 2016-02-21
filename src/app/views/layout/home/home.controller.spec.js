describe('Home Controller', function() {
  var postModel;
  var HomeController;
  var data = {
    id: '1',
    title: 'title',
    body: 'body'
  };

  beforeEach(module('af.home'));
  beforeEach(inject(function(_postModel_, $controller) {
    postModel = _postModel_;
    postModel.inject(data);
    HomeController = $controller('HomeController');
  }));

  it('should have a property posts populated with postModel data', function() {
    expect(HomeController.posts[0].id).toBe(data.id);
  });
});
