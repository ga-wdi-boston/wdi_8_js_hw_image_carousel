var Carousel = function(){

};

var counter = 0;

Carousel.slideLeft = function() {
  if ( counter < 2){
    $( ".carousel-indicators" ).animate({ "left": "-=200px" }, "slow" );
    counter += 1;
  } else {
    $('#first').click(Carousel.slideToTo('0px'));
    counter = 0;
  }
  ;
}

Carousel.slideRight = function() {
  if (counter > 0){
   $( ".carousel-indicators" ).animate({ "left": "+=200px" }, "slow" );
   counter -= 1;
  } else {
    $('#second').click(Carousel.slideToTo('-400px'));
    counter = 2;
  }
}

Carousel.slideToTo = function(position){
  $( ".carousel-indicators" ).animate({ "left": position }, "slow" );
}

Carousel.slideTo = function(position){
  $( ".carousel-indicators" ).animate({ "left": position.data.position }, "slow" );
}

$(document).ready(function(){

  $( ".left-icon" ).click(Carousel.slideLeft);
  $( ".right-icon" ).click(Carousel.slideRight);

  $('#first').click({position: '0px'}, Carousel.slideTo);
  $('#second').click({position: '-200px'}, Carousel.slideTo);
  $('#third').click({position: '-400px'}, Carousel.slideTo);

});

