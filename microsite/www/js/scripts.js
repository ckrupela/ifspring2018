$(document).ready(function(){

	$("#landing").click(function(){
		$(this).fadeOut([.5]);
		 $(this).hide([.5]);
	})

	$("#life").hover(function(){
		$("#redlife").show();
		$("#graylife").show();

	})

	// var elem = document.querySelector('.carousel');
 //    var instance = M.Carousel.init(elem, options);

  // Or with jQuery

     $('.carousel').carousel();
	




});