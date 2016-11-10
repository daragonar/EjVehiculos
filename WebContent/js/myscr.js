$(document).ready(function(){

	$( "form" ).on( "mouseenter", function(){
		$(this).addClass("miBoton")
		.removeClass("miBoton1")
	});

		$( "form" ).on( "mouseleave", function(){
			$(this).removeClass("miBoton")
			.addClass("miBoton1")
		});

		$("#miBoton").on("click",function(){
			$("form").toggle("slow")
		});
});
