
$(document).ready(function() {
	registerClickEvents();
	
});

function registerClickEvents() {
	$("#login-form-submit").click(function() {

		var formdata = $("#login-form").serialize();
		$("#debug-div").text(formdata);


		//$.ajax({});
	});
}