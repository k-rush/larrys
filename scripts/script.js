
$(document).ready(function() {
	registerClickEvents();
	
});

function registerClickEvents() {
	$("#login-form-submit").click(function() {
		
		var logindata = {};
		logindata['username'] = $("#username-input").val();
		logindata['password'] = $("#password-input").val();		
		$("#debug-div").append(logindata.username + " " + logindata.password + "<br>");


		$.ajax( 
        {
          method: "POST",
          url: "https://ips3y5tbeh.execute-api.us-west-2.amazonaws.com/prod/larrys-login",
          dataType: "json",
          data: JSON.stringify(logindata),
          crossdomain: true,
          async:true, 
          success: function(data) {
            //Success callback of API call
            alert("SUCCESS" + data);
          },
          error: function(data) {
            //Error callback of API call
            alert("ERROR" + JSON.stringify(data));
          }

        }
      ).done(function(data) {
        alert(data);
      });
	});
}