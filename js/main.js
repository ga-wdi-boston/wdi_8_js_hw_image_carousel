$(function() {
  pCarousel.appendImages();
});

var pCarousel = {};

pCarousel.appendImages = function() {
  var items = $(".item"),
      list  = $("ol.my-carousel"),
      item;

  list.empty();
  for (var i = 0; i < items.length; i++) {
    item = $("<li/>", { html: items[i] });
    list.append(item);
  }
  list.children().first().addClass("my-active");
}

pCarousel.slide = function(direction) {
  var itemWidth = $(".my-carousel li").outerWidth(),
      currentLeft = parseInt($(".my-carousel").css("left")) || 0,
      active = $(".my-active"); // used to check if we're all the way left/right

  if (direction === "right" && !active.is(":first-child")) {
    $(".my-carousel:not(:animated)").animate({
      "left": currentLeft + itemWidth},500);
    active.prev().addClass("my-active");
    active.removeClass("my-active");
  }
  if (direction === "left" && !active.is(":last-child")) {
    $(".my-carousel:not(:animated)").animate({
      "left": currentLeft - itemWidth},500);
    active.next().addClass("my-active");
    active.removeClass("my-active");
  }
}
