
var jknsCarousel = {};


//when loaded
$(document).ready(function(){
	// get by class
	jknsCarousel.CarouselElements = $('.item');

	// reveal next image
	jknsCarousel.play = function(){
		var $curr = $('.item.active'),
		    $first = $('.item').first(),
		    $last = $('.item').last(),
		    $next;

		// Step 1: Make currently active item, inactive
		$curr.removeClass('active');

		// Step 2: make
		$next = $curr.next();

		if($next.length === 0) {
			$next = $first;
		}

		// Step 3: make next item active
		$next.addClass('active');
	};

	//wait
	setInterval(jknsCarousel.play, 3000);
});





// remove image from list
// add it to the end of the list
// then start the cycle again
