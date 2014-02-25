
$(function() {

var carousel = $('#carousel'),
    picture = $('li'),
    shift_time = 2000,
    shift_distance = 4000,
    interval;

function pictures(){
    return carousel.find(picture);
};

pictures().first().addClass('active');
pictures().first().fadeIn(shift_time);


interval = setInterval(function(){
    var i = carousel.find('.active').index();

    pictures().eq(i).removeClass('active');
    pictures().eq(i).fadeOut(shift_time);
    if(pictures().length === i + 1) {
        i =-1;
    };

    pictures().eq(i + 1).fadeIn(shift_time);
    pictures().eq(i + 1).addClass('active');
    }
     , shift_time + shift_distance
    );

});


