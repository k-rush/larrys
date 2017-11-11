//Document ready function
$(document).ready(function() {
	$("#login-form-submit").click(function() {
		var formdata = $("#login-form").serialize();
		$("#debug-div").append(formdata);

		//$.ajax({});
	});
});

$(function() {
	
});
