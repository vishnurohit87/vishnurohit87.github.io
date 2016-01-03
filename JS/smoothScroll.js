$('document').ready(function(){
//Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});
//Add smooth scrolling to all links inside navbar
$("#myNavbar a").on('click', function(event){
	//Prevent default anchor click behavior
	event.preventDefault();

	//Store hash(#) of whatever we just clicked on
	var hash = this.hash;
	//Using jQuery's animate() method to add smooth page scroll
	$('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
		//Add hash (#) to URL when done scroling (defualt click behavior)
		window.location.hash = hash;
	});
});
});
