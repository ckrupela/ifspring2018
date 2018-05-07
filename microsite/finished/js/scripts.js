$(document).ready(function(){

	$("#landing").click(function(){
		$(this).fadeOut([.5]);
		 $(this).hide([.5]);
	})

	$(".menu").click(function(){
		$("#links").toggleClass("open");
	})
	console.log("Toggled the class!");


	// jQuery(document).ready(function() {
	// var offset = 250;
	// var duration = 300;
	// jQuery(window).scroll(function() {
	// if (jQuery(this).scrollTop() > offset) {
	// jQuery(‘.back-to-top’).fadeIn(duration);
	// } else {
	// jQuery(‘.back-to-top’).fadeOut(duration);
	// }
	// });
	 
	// jQuery(‘.back-to-top’).click(function(event) {
	// event.preventDefault();
	// jQuery(‘html, body’).animate({scrollTop: 0}, duration);
	// return false;
	// })
 
// });
	// $("#life").hover(function(){
	// 	$("#redlife").hide();
	// 	$("#graylife").hide();

	// })

	// var elem = document.querySelector('.carousel');
 //    var instance = M.Carousel.init(elem, options);

  // O
	




});