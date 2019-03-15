$("ul").on("click", "li", function(){
	if($(this).css("color") === "rgb(255, 192, 203)"){
		$(this).css({
			color: "gray",
			textDecoration: "none"
		});
} else {
		$(this).css({
		color: "pink",
		textDecoration: "line-through"
	});
}
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); 
	});
	event.stopPropagation();
	});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newAppointment = $(this).val(); 
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newAppointment + "</li>")
	}
});

$(".fas").click(function(){
	$("input[type='text'").fadeToggle();
});
