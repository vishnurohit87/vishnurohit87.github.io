$(document).ready(function(){
//Save original background color
originalBackground = $('.navbar').css('background');
//Set transparency first
$('.navbar').css('background', 'rgba(0,0,0,0)');
// fade in .navbar
$(function () {
	/*$(window).scroll(function () {
		//Minimum position
		// set distance user needs to scroll before we start fadeIn
		if ($(this).scrollTop() > ($('#HOME').height()+parseInt($('.container-fluid').css('padding-bottom'), 10))) {
			$('.navbar').css('background','rgb(248, 248, 248)');
		} 
		else {
			$('.navbar').css('background', 'rgba(0,0,0,0.4)');
		}
	});*/
	$(window).scroll(function() {
		if($(window).scrollTop() < ($('#HOME').height() + parseInt($('.container-fluid').css('padding-bottom'), 10))) {
		$('.navbar').css('background', 'Black');
		}
	})
	$(".navbar").on("activate.bs.scrollspy", function(){
		var hash = $(this).find("li.active a").attr("href");
		$('.navbar').css('background', $(hash).css('background'));	
	})
})
});
