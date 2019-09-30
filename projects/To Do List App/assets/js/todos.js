//even lintener for lis
// $("li").click(function(){
// 	$(this).toggleClass("done");
// });
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//event listener for span to remove respective li
// $("span").click(function(event){
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });
$("ul").on("click", "span", function(event){
	//remove the entire li insted of just the span
	//$(this).parent().remove();
	// $(this).parent().fadeOut().remove();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	//to stop bubbling up elements
	//span -> li -> ul -> div -> body
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		var newTodoItem = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span> " + newTodoItem + "</li>"); 
	}
});

// hide, show or add button
// $(".fa-pencil-alt").on("click", function(){
// 	$('input[type="text"]').toggleClass("hide");
// });
$(".fa-pencil-alt").click(function(){
	$('input[type="text"]').fadeToggle("hide");
});
