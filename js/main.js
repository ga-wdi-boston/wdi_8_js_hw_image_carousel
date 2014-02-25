$(function(){
  Carousel.init();
});


var Carousel = {};

Carousel.moveLeft = function(event) {
  var index = $('div.active').index();
  event.preventDefault();
  $('div.active, li.active').removeClass('active');
  if ( index === 0 ) {
    index = $('.item').length - 1;
  } else {
    index = index - 1;
  }
  $('.item').eq(index).addClass('active');
  $('li').eq(index).addClass('active');
}

Carousel.moveRight = function(event) {
  var index = $('div.active').index();
  event.preventDefault();
  $('div.active, li.active').removeClass('active');
  if ( index === $('.item').length - 1 ) {
    index = 0;
  } else {
    index = index + 1;
  }
  $('li').eq(index).addClass('active');
  $('.item').eq(index).addClass('active');
}

Carousel.clickIndicator = function(event) {
  var index = $(event.target).parent().index();

  event.preventDefault();

  $('div.active, li.active').removeClass('active');

  $('li').eq(index).addClass('active');
  $('.item').eq(index).addClass('active');
};


Carousel.init = function(){
  $('.left-click').on('click', this.moveLeft.bind(this));
  $('.right-click').on('click', this.moveRight.bind(this));
  $('.carousel-indicators').on('click', this.clickIndicator.bind(this));
};
