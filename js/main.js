$(document).ready(function(){

	$('#left').click(CarouselApp.slideLeft);
	$('#right').click(CarouselApp.slideRight);

	$("[data-target='#carousel-example-generic']").click(CarouselApp.setTo);


});

CarouselApp = {};

CarouselApp.slideLeft = function(event){
	var list = $('#image-list');
	var size = $('#image-list li').size();
	if(list.position().left > ((size - 1) * -400)){
		list.animate({ "left": "-=400px" }, 3000 )
	};
};

CarouselApp.slideRight = function(event){
	var list = $('#image-list');
	var size = $('#image-list li').size();
	if(list.position().left < 0) {
		$('#image-list').animate({ "left": "+=400px" }, 3000 )
	};
};

CarouselApp.setTo = function(event){
	var position;

	if(event.target === $("[data-slide-to='0']")){
		position = '0px';
	} else if(event.target === $("[data-slide-to='1']")) {
		position = '-400px';
	} else {
		position = '-800px';
	}

	$('#image-list').animate({ "left": position }, 3000 );
};


