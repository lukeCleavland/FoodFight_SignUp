
$(document).ready(function(){

	$(window).keydown(function(event){
		if(event.keyCode == 13) {
		event.preventDefault();
		$("#email").blur();
		}
	});
	
	$('#submit').click(function(e){
	var postData = $("#email").serialize();
	/*
	   if ($("#email").val().length<=1){
			$("#email").css("background","yellow");
			return false;
	   }else{
	   */
		   $.ajax({
		type:'POST',
		data: postData,
		url: "http://foodfightmarketing.com/KioskApp/v3/formPros.php",
		

		success:function(data)
		{
		
		 alert(postData); 
		 //$("#ff")[0].reset();
		 $("form").html(data);
		//window.setTimeout("window.location.reload()",5000);
		//alert('Your comment was successfully added');

		  //return true;
		},
		error:function(){
			$(".warning").text("There was an error connecting to the database");
			//alert('There was an error adding your comment');

			//window.setTimeout("window.location.reload()", 5000);
		}
			});
		
	  e.preventDefault();
	  
	 //  }
	
	})
//})
	
	$("#email").focus(function(){
				$("#email").css("background-color","white");
			});

	

	});