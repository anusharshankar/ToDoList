//Check of specific todos by clicking
//By changing the method from click to on, it allows the 
//function to be applicable to all possible and future events

//$("li").click(function(){
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
//$("span").click(function(event){
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText +"</li>");
	}
});

$("#toggle-form").click(function(){
		$('input[type="text"]').fadeToggle();
	});