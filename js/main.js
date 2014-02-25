$(function() {

  var slider = $('#carousel'),
    slide = $('li'),
    transition_time = 1000,
    time_between_slides = 2000,
    interval;

  function slides(){
    return slider.find(slide);
  };

  slides().first().addClass('active');
  slides().first().fadeIn(transition_time);

  // auto scroll
  interval = setInterval(
    function(){
      var i = slider.find('.active').index();

      slides().eq(i).removeClass('active');
      slides().eq(i).fadeOut(transition_time);

      if(slides().length === i + 1) {
        i =- 1;
      };
      slides().eq(i + 1).addClass('active');
      slides().eq(i + 1).fadeIn(transition_time);
    }
    , transition_time + time_between_slides
  );
});

// $(function(){
//   $('#second-pic').hide();
//   $('#third-pic').hide();

//   $('#first-pic').click(function() {
//     $('#first-pic').slideUp({'direction': 'left', 'duration': 3000});
//     $('#second-pic').show({'direction': 'top', "duration": 3000});
//   });

//   $('#second-pic').click(function() {
//     $('#second-pic').slideUp({'direction': 'left', 'duration': 3000});
//     $('#third-pic').show({'direction': 'top', "duration": 3000});
//   });

//   $('#third-pic').click(function() {
//     $('#third-pic').slideUp({'direction': 'left', 'duration': 3000});
//     $('#first-pic').show({'direction': 'top', "duration": 3000});
//   });
// });
