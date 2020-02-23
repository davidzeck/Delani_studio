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



var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function() {
    $('.image-frame').hover(function(){
		$('.image-caption',this).slideToggle('slow');
	}, function(){
		$('.image-caption',this).slideToggle('slow');
    });
});
