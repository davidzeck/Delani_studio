$(document).ready(function(){

    $(".text-one").hide();
    $(".text-two").hide();
    $(".text-three").hide();


    $(".icon-one").click(function(){
        $(".icon-one").hide();
        $(".text-one").show();
    });
    
    $(".text-one").click(function(){
        $(".text-one").hide();
        $(".icon-one").show();
    });

    $(".icon-two").click(function(){
        $(".icon-two").hide();
        $(".text-two").show();
    });
    $(".text-two").click(function(){
        $(".text-two").hide();
        $(".icon-two").show();
    });

    $(".icon-three").click(function(){
        $(".icon-three").hide();
        $(".text-three").show();
    });
    $(".text-three").click(function(){
        $(".text-three").hide();
        $(".icon-three").show();
    });
});
