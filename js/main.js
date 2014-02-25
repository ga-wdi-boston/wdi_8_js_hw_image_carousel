$(function(){
  $('#second-pic').hide();
  $('#third-pic').hide();

  $('#first-pic').click(function() {
    $('#first-pic').slideUp({'direction': 'left', 'duration': 3000});
    $('#second-pic').show({'direction': 'top', "duration": 3000});
  });

  $('#second-pic').click(function() {
    $('#second-pic').slideUp({'direction': 'left', 'duration': 3000});
    $('#third-pic').show({'direction': 'top', "duration": 3000});
  });

  $('#third-pic').click(function() {
    $('#third-pic').slideUp({'direction': 'left', 'duration': 3000});
    $('#first-pic').show({'direction': 'top', "duration": 3000});
  });
});

