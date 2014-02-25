
$(document).ready(function(){

  var width = $('#carousel-inner div').width();

  function carousel(){

    $('#carousel-inner').delay(1000).animate({right: '+=' + width},1000, function(){
      var first = $('#carousel-inner div:first-child');
      first.remove();
      $(this).append(first);
      $(this).css({right: '-=' + width});
      carousel();
    });
  }
  carousel();
});
