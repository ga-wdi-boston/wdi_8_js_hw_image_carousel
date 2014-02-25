$(document).ready(function() {

	$('#carousel-example-generic').css('background', "url('http://i.imgur.com/9fOG9nl.jpg') no-repeat center center fixed");
	var image_scroll = window.setInterval(function() {
		var current_active = $('div.active'),
			active_li = $('li.active'),
			container = $('#carousel-example-generic'),
			z = 1;

		if ($('.item').index(current_active) < $('.item').length - 1) {
			var id = parseInt(current_active.next('.item').attr('id').split('_')[1]);
			current_active.next('.item').css('z-index', z);
			z = z+ 1;

			current_active.next('.item').addClass('active');
			active_li.next('li').addClass('active');

			current_active.removeClass('active');
			active_li.removeClass('active');

			if(id === 3) {
				container.css('background', "url('http://i.imgur.com/uzp23.jpg') no-repeat center center fixed");
			} else {
				container.css('background', "url('http://i.imgur.com/9fOG9nl.jpg') no-repeat center center fixed");
			}
		} else {
			$('.item:first-child').css('z-index', z);
			z = z +1;
			$('.item:first-child').addClass('active');

			$('li:first-child').addClass('active');
			current_active.removeClass('active');

			active_li.removeClass('active');
			container.css('background', "url('http://i.imgur.com/9ewsT3r.jpg') no-repeat center center fixed");
		}
	}, 5000);
});


// $( ".image:nth-child(2)" ).animate({
//     opacity: 0.25,
//     left: "-=1000px",
//     width: "toggle"
//   }, 5000);

//$( ".image:first-child" ).slideToggle("slow");



