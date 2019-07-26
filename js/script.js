$(document).ready(function(){
    $("#png").click(function(){
        $(".paragraph-showing").toggle();
        $("#two").toggle();
   
    });
    $("#jnp").click(function(){
        $(".p-showing").toggle();
        $("#three").toggle();
   
    });
    $("#ing").click(function(){
        $(".p3-showing").toggle();
        $("#four").toggle();
   
    });
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4});
    }, function() {
        $(this).stop().animate({opacity:2})
    });
});



