hideStuff = () => {
  $('div[data-tracking-action="esporte"]').hide();
  $(".shopping").hide();
  $("#tns1-item1").hide();
  $(".medium-8").addClass("medium-12").removeClass("medium-8");
  $(".columns-container").css(
    "grid-template-columns",
    "repeat(2,minmax(0,1fr))"
  );
  $(".highlight-column-1").hide();
  $(".highlight-container").css(
    "grid-template-columns",
    "78.1% calc((100% - 75.1%) - 38.35px)"
  );
  $(".highlight-container").css("grid-template-areas", '"e b" "c b" "d b"');
  console.log(
    "The grid-template area should have been redefined now. The blue block should have move to the top row."
  );

  // $(".hui-color-sports").css("display", "none");
  // $(".slick-slide").css("display", "none");
  // $(".hui-publicidade--banner_slb_topo").css("display", "none");
  // $(".hui-publicidade--has-divider").css("display", "none");
  // $(".hui-publicidade--banner_slb_fim").css("display", "none");
  // $(".home-widgets-inferiores").css("display", "none");
  // $(".home-topglobocom").css("display", "none");
  // $(".medium-8").addClass("medium-12").removeClass("medium-8");
  // $(".hui-highlight--with-separator").css("min-height", "67px");
  // $(".hui-premium-multiple__container").css("display", "inline");
};

$(document).ready(function () {
  document.addEventListener("load", hideStuff());
});
