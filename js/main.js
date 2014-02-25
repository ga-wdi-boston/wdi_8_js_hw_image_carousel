var Carousel = function(){};


Carousel.slideLeft = function() {
  $( ".carousel-indicators" ).animate({ "left": "-=200px" }, "slow" );
}

Carousel.slideRight = function() {

  $( ".carousel-indicators" ).animate({ "left": "+=200px" }, "slow" );
}

Carousel.slideTo = function(position) {
  $( ".carousel-indicators" ).animate({ "left": position.data.position }, "slow" );
}

$(document).ready(function(){
  // var counter = 0;

  $( ".left-icon" ).click(Carousel.slideLeft);
  $( ".right-icon" ).click(Carousel.slideRight);

  $( '#first' ).click({position: '0px'}, Carousel.slideTo);
  $( '#second').click({position: '-200px'}, Carousel.slideTo);
  $( '#third').click({position: '-400px'}, Carousel.slideTo);

});

