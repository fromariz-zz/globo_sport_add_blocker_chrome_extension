hideStuff = () => {
  $(".hui-color-sports").css("display", "none");
  $(".slick-slide").css("display", "none");
  $(".hui-publicidade--banner_slb_topo").css("display", "none");
  $(".hui-publicidade--has-divider").css("display", "none");
  $(".hui-publicidade--banner_slb_fim").css("display", "none");
  $(".home-widgets-inferiores").css("display", "none");
  $(".home-topglobocom").css("display", "none");
  $(".medium-8").addClass("medium-12").removeClass("medium-8");
  $(".hui-highlight--with-separator").css("min-height", "67px");
  $(".hui-premium-multiple__container").css("display", "inline");
};

$(document).ready(function () {
  document.addEventListener("load", hideStuff());
});
