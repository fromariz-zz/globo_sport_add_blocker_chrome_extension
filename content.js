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
  $(".homeui-tc-esporte").hide();
  $(".header-titles").css("grid-template-columns", "repeat(4,auto)");
};

$(document).ready(function () {
  document.addEventListener("load", hideStuff());
});
