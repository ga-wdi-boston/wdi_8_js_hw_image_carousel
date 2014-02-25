var carouselApp = {}

carouselApp.slide = function() {
	// var active,
	// 	on_deck,
	// 	in_the_hole;

	var $active = $('#carousel img.active');
	var $on_deck = $('#carousel img.on-deck');
	var $in_the_hole = $('#carousel img.in-the-hole');

	// active[0].classList.add('in-the-hole');
	// active[0].classList.remove('active');
	$active.addClass('in-the-hole');
	$active.removeClass('active');

	// on_deck[0].classList.add('active');
	// on_deck[0].classList.remove('on-deck');
	$on_deck.addClass('active');
	$on_deck.removeClass('on-deck');

	// in_the_hole[0].classList.add('on-deck');
	// in_the_hole[0].classList.remove('in-the-hole');
	$in_the_hole.addClass('on-deck');
	$in_the_hole.removeClass('in-the-hole');
};

setInterval(carouselApp.slide, 3000)
