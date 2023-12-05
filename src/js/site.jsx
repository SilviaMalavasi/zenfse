import $ from "jquery";

//import { ColumnsEdit } from "./core-blocks/columns.jsx";

import { doScrollSmoother } from "./base/scrollsmoother.jsx";
import { scrollToTarget, scrollToTop } from "./components/scroll-to.jsx";

import { removeAltOnHover } from "./base/remove-alt-on-hover.jsx";

import { gsapAnimations } from "./components/gsap.jsx";
import { mediaQueryAllMobile } from "./base/globals.jsx";
import { iubendaObserver } from "./components/iubenda-observer.jsx";

// Core blocks filters

//ColumnsEdit();

// Scroll-related functions

if (
  !mediaQueryAllMobile &&
  !document.body.classList.contains("wp-admin") &&
  !document.body.classList.contains("trp-editor-body") &&
  !document.body.classList.contains("login")
) {
  doScrollSmoother();
}
scrollToTop();
scrollToTarget();

// Reload on resize

if (!mediaQueryAllMobile) {
  window.onresize = function () {
    location.reload();
  };
}

// Move menu on scroll

if (!mediaQueryAllMobile) {
  window.addEventListener("scroll", scrollFunction);
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $(".zenfse-header").css("paddingTop", "1rem");
    } else {
      $(".zenfse-header").css("paddingTop", "3rem");
    }
  }
}

/* Open document ready */

$(function () {
  removeAltOnHover();

  if ($(".video-iframe").length) {
    iubendaObserver();
  }

  if (
    $(".fade-in").length ||
    $(".fade-in-up").length ||
    $(".fade-in-left").length ||
    $(".fade-in-right").length ||
    $(".fade-in-stagger-cont").length ||
    $(".fade-in-up-stagger-cont").length ||
    $(".fade-in-left-stagger-cont").length ||
    $(".fade-in-right-stagger-cont").length ||
    $(".blocco-numeri").length ||
    $(".fondo-scuro").length
  ) {
    gsapAnimations();
  }
}); // Chiudi document ready
