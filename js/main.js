$(document).ready(function(){

	$('#next-image').click(function() {
		 carouselApp.slide();
	});

});

var carouselApp = {}

carouselApp.slide = function() {

	var $active = $('#carousel img.active');
	var $on_deck = $('#carousel img.on-deck');
	var $in_the_hole = $('#carousel img.in-the-hole');


	$active.addClass('in-the-hole');
	$active.removeClass('active');

	$on_deck.addClass('active');
	$on_deck.removeClass('on-deck');

	$in_the_hole.addClass('on-deck');
	$in_the_hole.removeClass('in-the-hole');
};

//setInterval(carouselApp.slide, 3000)
