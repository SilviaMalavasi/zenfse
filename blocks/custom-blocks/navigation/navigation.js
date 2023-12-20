import $ from "jquery";
import { mediaQueryAllMobile } from "../../../src/js/base/globals.js";

export function mobileMenu() {
  $("#menuToggle").on("tap click", function () {
    $("#mobile-menu").toggleClass("open-menu");
    $(".zenfse-header").toggleClass("open-menu");

    if (mediaQueryAllMobile) {
      $("body").toggleClass("fixed");
    }
  });
}
mobileMenu();

window.addEventListener("scroll", menuPadding);
function menuPadding() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (!mediaQueryAllMobile) {
      $(".zenfse-header").css("paddingTop", "0.5rem");
      $(".zenfse-header figure path:not(.ia, .pallino)").css("opacity", "0");
    } else {
      $(".zenfse-header figure path:not(.ia, .pallino)").css("opacity", "0");
    }
  } else {
    if (!mediaQueryAllMobile) {
      $(".zenfse-header").css("paddingTop", "2rem");
      $(".zenfse-header figure path:not(.ia, .pallino)").css("opacity", "1");
    } else {
      $(".zenfse-header figure path:not(.ia, .pallino)").css("opacity", "1");
    }
  }
}
