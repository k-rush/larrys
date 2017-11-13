
$(document).ready(function() {
	registerClickEvents();
	
});

function registerClickEvents() {
	$("#login-form-submit").click(function() {
		
		var logindata = {};
		logindata['username'] = $("#username-input").val();
		logindata['password'] = $("#password-input").val();		
		//$("#debug-div").append(logindata.username + " " + logindata.password + "<br>");

    //Make API call to login
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
            $("#debug-div").append("Login Succeeded. TOKEN: " + data.token + "\n");
            createCookie('token',data.token,1);
            createCookie('username',logindata['username'],1);
            console.log("SUCCESS " + data + "\n");
          },
          error: function(data) {
            //Error callback of API call
            console.log("ERROR " + data);
          }

        }
      );
	});

  $("#validate-token-submit").click(function() {
    
    var tokendata = {'token': readCookie('token')};   
    //$("#debug-div").append(logindata.username + " " + logindata.password + "<br>");

    //Make API call to login
    $.ajax( 
        {
          method: "POST",
          url: "https://87uo5r92ya.execute-api.us-west-2.amazonaws.com/prod/larrys-validate-token",
          dataType: "json",
          data: JSON.stringify(tokendata),
          crossdomain: true,
          async:true, 
          success: function(data) {
            //Success callback of API call
            $("#debug-div").append("Token validated. Username:" + data.username + " Exp: " + data.expiration + "\n");
            console.log("SUCCESS " + data + "\n");
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

    // API call to register
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

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}