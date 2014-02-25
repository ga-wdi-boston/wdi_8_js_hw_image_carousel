$(document).ready(function(){



});

var carouselApp = {}

carouselApp.slide = function() {
	var active,
		on_deck,
		in_the_hole;

	active = $('#carousel img.active');
	on_deck = $('#carousel img.on-deck');
	in_the_hole = $('#carousel img.in-the-hole');

	active[0].classList.add('in-the-hole');
	active[0].classList.remove('active');

	on_deck[0].classList.add('active');
	on_deck[0].classList.remove('on-deck');

	in_the_hole[0].classList.add('on-deck');
	in_the_hole[0].classList.remove('in-the-hole');
};

setInterval(carouselApp.slide, 3000)
