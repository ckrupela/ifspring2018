$(document).ready(function(){

	$("#landing").click(function(){
		$(this).fadeOut([.5]);
		 $(this).hide([.5]);
	})

	$(".menu").click(function(){
		$("#links").toggleClass("open");
	})
	console.log("Toggled the class!");

	// $("#life").hover(function(){
	// 	$("#redlife").hide();
	// 	$("#graylife").hide();

	// })

	// var elem = document.querySelector('.carousel');
 //    var instance = M.Carousel.init(elem, options);

  // O
	




});