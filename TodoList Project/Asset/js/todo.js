//checkoff specific todos by clicking

/*
$("li").click(function () {
    $(this).toggleClass("completed");
});
*/
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});

// click on X to delete

/*$("span").click(function(event) {
   $(this).parent().fadeOut(500,function () {
      $(this).remove();
   });
   event.stopPropagation();
});*/
$("ul").on("click","span", function(event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});


//Add todos

$("input[type='text']").keypress(function(event) {
    if(event.which === 13)
    {
        //grabing new todos text from input
        var todotext = $(this).val();
        $(this).val("");
        //creating a new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span> "+ todotext +"</li>")
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})
