$(document).ready(function(){

	$('#left').click(CarouselApp.slideLeft);
	$('#right').click(CarouselApp.slideRight);
	// $("[data-slide-to='0']").click(CarouselApp.setTo("0px"));
	// $("[data-slide-to='1']").click(CarouselApp.setTo("-500px"));
	// $("[data-slide-to='2']").click(CarouselApp.setTo("-1005px"));
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

CarouselApp.setTo = function(position){
	$('#image-list').animate({ "left": position }, 3000 );
};

