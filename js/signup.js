function submit_form() {

	$('#email').submit(function(e)
	{
		if ($(".required").val().length > 0)
		{
			var email = $("#emailinput").val();
			
			$.ajax({
			type:'POST',
			data: {email:email},
			url: "http://foodfightmarketing.com/KioskApp/formPros.php",
			
				success:function(data)
				{
					console.log(data);		
					$("#email").html("");
					$(".message").show().html("<span style='color:green'>Your email address has been added! <br /> Thank you for taking the time to fill out this form.</span>");
					//window.setTimeout(window.location.reload(),5000);
					//alert('Your comment was successfully added');
				},
				error:function(){
					$(".message").show().html("<span style='color:red'>There was an error connecting to the database.</span>");
				
				}
			});
		}else{
			$(".message").show().html("<span style='color:red'>Email address cannot be blank!</span>");
		}
	e.preventDefault();
	
	})
	
	$("#emailinput").focus(function(){
		
		$(".message").hide()
	})
}
$(document).ready(function(){
	submit_form();
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
		event.preventDefault();
		$("#email").blur();
		}
	});

	});