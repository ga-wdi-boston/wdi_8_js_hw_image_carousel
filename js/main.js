$(document).ready(function() {
	var a = $('a.carousel-control');

	var image_scroll = window.setInterval(function() {
		var current_active = $('div.active'),
			active_li = $('li.active');


		if ($('.item').index(current_active) < $('.item').length - 1) {
			current_active.next('.item').addClass('active');
			active_li.next('li').addClass('active');

			current_active.removeClass('active');
			active_li.removeClass('active');
		} else {
			$('.item:first-child').addClass('active');
			$('li:first-child').addClass('active');
			current_active.removeClass('active');
			active_li.removeClass('active');
		}
	}, 5000);

	a.click(function() {
		var current_active = $('div.active'),
			active_li = $('li.active');
			if($(this)[0].classList.contains('right')) {
				if ($('.item').index(current_active) < $('.item').length - 1) {
					current_active.next('.item').addClass('active');
					active_li.next('li').addClass('active');

					current_active.removeClass('active');
					active_li.removeClass('active');
				} else {
					$('.item:first-child').addClass('active');
					$('li:first-child').addClass('active');
					current_active.removeClass('active');
					active_li.removeClass('active');
				}
			} else {
				if ($('.item').index(current_active) > 0) {

					current_active.prev('.item').addClass('active');
					active_li.prev('li').addClass('active');
				} else {
					$('.item:last-child').addClass('active');
					$('li:last-child').addClass('active')
				}
				current_active.removeClass('active');
				active_li.removeClass('active');
			}
	});


	$( "li[data-target*='#carousel-example-generic']" ).click(function() {
		var index = parseInt($(this).attr('data-slide-to'));

		index = index +1;
		$('li.active').removeClass('active');
		$('div.active').removeClass('active');
		$(this).addClass('active');

		$('.item:nth-child(' + index + ')').addClass('active');

	});
});
