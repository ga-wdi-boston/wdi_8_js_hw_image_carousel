$(function() {
  pCarousel.appendImages();
  $(".left").data("direction", "left");
  $(".right").data("direction", "right");
  $(".slide-buttons").click(pCarousel.slide);
  $("#newartist").click(pCarousel.addImage);
});

var pCarousel = {};

pCarousel.appendImages = function() {
  var items = $(".item"),
      list  = $(".my-carousel"),
      item;

  list.empty();
  for (var i = 0; i < items.length; i++) {
    item = $("<li/>", { html: items[i] });
    list.append(item);
  }
  list.children().first().addClass("my-active");
}

pCarousel.slide = function() {
  var itemWidth = $(".my-carousel li").outerWidth(),
      currentLeft = parseInt($(".my-carousel").css("left")) || 0,
      direction = $(this).data().direction;
      active = $(".my-active"); // used to check if we're all the way left/right

   if (direction === "left" && !active.is(":first-child")) {
    $(".my-carousel:not(:animated)").animate({
      "left": currentLeft + itemWidth},500);
    active.prev().addClass("my-active");
    active.removeClass("my-active");
  }

  if (direction === "right" && !active.is(":last-child")) {
    $(".my-carousel:not(:animated)").animate({
      "left": currentLeft - itemWidth},500);
    active.next().addClass("my-active");
    active.removeClass("my-active");
  }
}

pCarousel.addImage = function() {
  var imageURL = $("#newimg-url"),
      imageCap = $("#newimg-caption"),
      newImageNode,
      newItemNode,
      newCaptionNode;

  newImageNode = $("<img/>", {
    src: imageURL.val(),
    alt: imageCap.val()});

  newCaptionNode = $("<div/>", {
    "class": "my-caption",
    html: imageCap.val()});

  newItemNode = $("<div/>", { "class": "item"});
  newItemNode.append(newImageNode).append(newCaptionNode);
  $("<li/>").append(newItemNode).appendTo($(".my-carousel"));

  $("#img-added").show().delay(3000).fadeOut("slow");

  imageURL.val("");
  imageCap.val("");
}
