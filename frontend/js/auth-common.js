(function (global, document) {

  // Redirect the user to the dashboard if there's a cookie. If the cookie is
  // invalid, they would be redirected back to the login page *after* the
  // cookie is deleted.
  global.loggedInRedirect = function() {
    if (global.cookieGet("commentoOwnerToken") !== undefined)
      document.location = global.commentoOrigin + "/dashboard";
  }


  // Prefills the email field from the URL parameter.
  global.prefillEmail = function() {
    if (paramGet("email") != undefined) {
      $("#email").val(paramGet("email"));
      $("#password").click();
    }
  };

} (window, document));
