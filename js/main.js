var CarouselApp = {
  pos: 0,
  slides: []
};


CarouselApp.init = function( _carousel ) {

  $.each( _carousel.find(".slide"), function( i, slide ) {

      CarouselApp.slides.push( slide );

  });

  $("div.page").click( function(event) {

    event.preventDefault();

    CarouselApp.move( $(this).data("target") );

  });

  $( CarouselApp.slides[ CarouselApp.pos ] ).addClass("current");

}

CarouselApp.move = function( dir ) {

  dir = (typeof dir == "undefined") ? "next" : dir;

  // clear intervals
  clearInterval(CarouselApp.interval);
  clearTimeout(CarouselApp.timeout);

  // dir will be "prev" or "next"
  if( dir === "prev") {

    if (CarouselApp.pos == 0) {

      CarouselApp.pos = CarouselApp.slides.length - 1;

    } else {

      CarouselApp.pos--;

    }

  } else {

    if (CarouselApp.pos == CarouselApp.slides.length - 1) {

      CarouselApp.pos = 0;

    } else {

      CarouselApp.pos++;

    }
  }

  $(".slide.current").removeClass("current");
  $( CarouselApp.slides[ CarouselApp.pos ] ).addClass("current");

  setTimeout(CarouselApp.intervalBoot, 5000);

}

CarouselApp.intervalBoot = function() {
  CarouselApp.interval = setInterval(CarouselApp.move, 3000);
}


$(document).ready(function () {

  CarouselApp.init( $("#Fader") );

  CarouselApp.interval = setInterval(CarouselApp.move, 3000);


});
