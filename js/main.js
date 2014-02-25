
var jknsCarousel = {};
//when loaded
$(document).ready(function(){
	// get by class
	jknsCarousel.CarouselElements = $('.item');

	// reveal next image
	jknsCarousel.playImage = function(){
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
	jknsCarousel.playIndicator = function(){
		$('div[data-height]').text()
		var $curr = $('.indicator.active'),
		    $first = $('.indicator').first(),
		    $last = $('.indicator').last(),
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

	jknsCarousel.playWithIndicator = function(){
		jknsCarousel.playImage();
		jknsCarousel.playIndicator();
	};
	//wait
	setInterval(jknsCarousel.playWithIndicator, 3000);

	// $('.next').click(function(event){
	// 	jknsCarousel.usingButtons();
	// });

});

// jknsCarousel.usingButtons = function(){
//   var images_array = $('.item')
//       currentImageIndex = 0,
//       current = $('.item.active'),
//       next = current.next(),
//       first = $('.item').first();

//   var janiceHandler = function(event){
//     if(currentImageIndex === (images_array.length - 1) ){
//       currentImageIndex = 0;
// 	    current.removeClass('active');
//     }else{
//       currentImageIndex += 1;
//       next = first;
//       next.addClass('active');
//     }
//   };
// };






