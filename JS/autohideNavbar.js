$(document).ready(function(){
//Save original background color
originalBackground = $('.navbar').css('background');
//Set transparency first
$('.navbar').css('background', 'rgba(0,0,0,0.4)');
// fade in .navbar
$(function () {
	$(window).scroll(function () {
		// set distance user needs to scroll before we start fadeIn
		if ($(this).scrollTop() > ($('#HOME').height()+parseInt($('.container-fluid').css('padding-bottom'), 10))) {
			$('.navbar').css('background','rgb(248, 248, 248)');
		} 
		else {
			$('.navbar').css('background', 'rgba(0,0,0,0.4)');
		}
	});
})
});
