var CarouselApp = CarouselApp || {};

    CarouselApp.init = function( _item ) {

        console.log(_item);

    }


$(document).ready(function () {

    CarouselApp.init( $("#fader") );

});
