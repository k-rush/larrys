
$(document).ready(function() {
	registerClickEvents();
	
});

function registerClickEvents() {
	$("#login-form-submit").click(function() {
		
		var logindata = {};
		logindata['username'] = $("#username-input").val();
		logindata['password'] = $("#password-input").val();		
		$("#debug-div").append(logindata.username + " " + logindata.password + "<br>");

    //Make API call to login lambda function.
		$.ajax( 
        {
          method: "POST",
          url: "https://87uo5r92ya.execute-api.us-west-2.amazonaws.com/prod/login",
          dataType: "json",
          data: JSON.stringify(logindata),
          crossdomain: true,
          async:true, 
          success: function(data) {
            //Success callback of API call
            console.log("SUCCESS " + data);
          },
          error: function(data) {
            //Error callback of API call
            console.log("ERROR " + data);
          }

        }
      );
	});


  $("#register-form-submit").click(function() {
    
    var logindata = {};
    logindata['username'] = $("#username-input").val();
    logindata['password'] = $("#password-input").val();   
    $("#debug-div").append(logindata.username + " " + logindata.password + "<br>");


    $.ajax( 
        {
          method: "POST",
          url: "https://87uo5r92ya.execute-api.us-west-2.amazonaws.com/prod/register-user",
          dataType: "json",
          data: JSON.stringify(logindata),
          crossdomain: true,
          async:true, 
          success: function(data) {
            //Success callback of API call
            console.log("SUCCESS " + data);
          },
          error: function(data) {
            //Error callback of API call
            console.log("ERROR " + data);
          }

        }
      );
  });
}