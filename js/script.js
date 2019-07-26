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
    $(".hov").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov").fadeOut();
    });
    $(".hov1").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov1").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov1").fadeOut();
    });
    $(".hov2").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov2").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov2").fadeOut();
    }); 
    $(".hov3").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov3").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov3").fadeOut();
    }); 
    $(".hov4").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov4").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov4").fadeOut();
    }); 
    $(".hov5").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov5").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov5").fadeOut();
    });
    $(".hov6").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov6").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov6").fadeOut();
    });
    $(".hov7").hide();
    $(".image").animate({
        opacity:1
    });
    $(".image").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".hov7").fadeIn();
    }, function() {
        $(this).stop().animate({opacity:2},500);
        $(".hov7").fadeOut();
    });
   $("button").click(function(){
       var name=$("#name").val();
       alert(name + "Thank you for reaching out to us")
   });
});


