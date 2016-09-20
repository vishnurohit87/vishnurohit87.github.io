$(document).ready(function(){
//Save original background color
//originalBackground = $('.navbar').css('background');
//Set transparency first
$('.navbar').css('background', 'rgba(0,0,0,0.5)');
// fade in .navbar
$(function () {
	$(window).scroll(function () {
		//Minimum position: Set distance user needs to scroll before we start fadeIn
		if ($(this).scrollTop() > ($('#HOME').height()+parseInt($('.container-fluid').css('padding-bottom'), 10))) {
			$('.navbar').fadeIn(400);
		} 
		else {
			//$('.navbar').css('background', 'rgba(0,0,0,0)');
			$('.navbar').fadeOut(400);
		}
	});
	/*$(window).scroll(function() {
		if($(window).scrollTop() < ($('#HOME').height() + parseInt($('.container-fluid').css('padding-bottom'), 10))) {
		$('.navbar').css('background', 'Black');
		}
	})*/
	$(".navbar").on("activate.bs.scrollspy", function(){
		var hash = $(this).find("li.active a").attr("href");
		$('.navbar').css('background', $(hash).css('background'));
		$('.navbar').css('opacity', .95);
	})
})
});
