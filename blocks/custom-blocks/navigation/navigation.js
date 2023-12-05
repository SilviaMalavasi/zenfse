import $ from "jquery";
import { mediaQueryAllMobile } from "../../../src/js/base/globals.jsx";

export function mobileMenu() {
  $("#menuToggle").on("tap click", function () {
    $("#mobile-menu").toggleClass("open-menu");
    $(".zenfse-header").toggleClass("open-menu");

    if (mediaQueryAllMobile) {
      $("body").toggleClass("fixed");
    }
  });

  $(document).on("tap click", function (event) {
    if ($("#mobile-menu").hasClass("open-menu")) {
      $(document).on("tap click", function (event) {
        var $target = $(event.target);
        if (
          !$target.closest("#mobile-menu .mobile-menu-cont").length &&
          !$target.closest(".menu-item.menu-home").length
        ) {
          $("#mobile-menu").toggleClass("open-menu");
          $(".zenfse-header").toggleClass("open-menu");
        }
        if ($target.closest("#menuToggle").length) {
          $("#mobile-menu").toggleClass("open-menu");
          $(".zenfse-header").toggleClass("open-menu");
        }
      });
    }
  });
}
mobileMenu();
