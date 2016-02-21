describe('Login Controller', function() {
  var SignupController;
  var $auth;
  var signupForm;

  beforeEach(module('af.auth'));
  beforeEach(inject(function($controller, _$auth_, afSignupForm, $q) {
    SignupController = $controller('SignupController');
    $auth = _$auth_;
    signupForm = afSignupForm;
    spyOn($auth, 'signup').and.callFake(function() {
      return $q(function(resolve) {
        resolve()
      })
    })
  }));

  it('should contain a property signupForm wich is equal to afSignupForm service', function() {
    expect(SignupController.signupForm).toBe(signupForm);
  });

  it('should call the signup method of $auth service when signup method of the controller is called', function() {
    SignupController.signup();
    expect($auth.signup).toHaveBeenCalled();
  })

});
