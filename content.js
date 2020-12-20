var sportsEls = document.getElementsByClassName("hui-color-sports");
if (sportsEls && sportsEls.length > 0) {
  for (var i = 0; i < sportsEls.length - 1; i++) {
    sportsEls[i].style.display = "none";
  }
}

var slickSlides = document.getElementsByClassName("slick-slide");
if (slickSlides && slickSlides.length > 0) {
  for (var i = 0; i < slickSlides.length - 1; i++) {
    if (slickSlides[i].getAttribute("data-slick-index") == 1) {
      slickSlides[i].style.visibility = "hidden";
    }
  }
}

var publis = document.getElementsByClassName("hui-publicidade");
if (publis && publis.length > 0) {
  for (var i = 0; i < slickSlides.length - 1; i++) {
    slickSlides[i].style.display = "none";
  }
}
