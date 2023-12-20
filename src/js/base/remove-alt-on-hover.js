import $ from "jquery";

export function removeAltOnHover() {
  $("img, iframe, a").on("mouseenter", function () {
    var title = $(this).attr("title");
    $(this).attr("tmp_title", title);
    $(this).attr("title", "");
  });

  $("img, iframe, a").on("mouseleave", function () {
    var title = $(this).attr("tmp_title");
    $(this).attr("title", title);
  });
}
