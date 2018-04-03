// Check off specific todo by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Cick on X to delete Todos

$("ul").on("click", "span",  function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
			// create a new li an add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");	
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
})
