$(document).ready(function(){
	$('#left').click(CarouselApp.slideLeft);
	$('#right').click(CarouselApp.slideRight);
});

CarouselApp = {};

CarouselApp.slideLeft = function(){
	$('#image-list').animate({ "left": "-=500px" }, "slow" )
}

CarouselApp.slideRight = function(){
	$('#image-list').animate({ "left": "+=500px" }, "slow" )
}

