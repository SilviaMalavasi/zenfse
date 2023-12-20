import $ from "jquery";
import { mediaQueryAllMobile } from "./base/globals.js";

import { doScrollSmoother } from "./base/scrollsmoother.js";
import { scrollToTarget, scrollToTop } from "./components/scroll-to.js";
import Cursor from "./components/cursor.js";

import { removeAltOnHover } from "./base/remove-alt-on-hover.js";
import { gsapAnimations } from "./components/gsap.js";
import { menuColor } from "./components/menu-color.js";

// Reload on resize

if (
  !mediaQueryAllMobile &&
  !document.body.classList.contains("wp-admin") &&
  !document.body.classList.contains("trp-editor-body") &&
  !document.body.classList.contains("login")
) {
  window.onresize = function () {
    location.reload();
  };
}

/* Open document ready */

$(function () {
  // Scroll-related functions

  if (
    !mediaQueryAllMobile &&
    !document.body.classList.contains("wp-admin") &&
    !document.body.classList.contains("trp-editor-body") &&
    !document.body.classList.contains("login")
  ) {
    doScrollSmoother();
    Cursor();
  }
  scrollToTop();
  scrollToTarget();

  removeAltOnHover();

  if (
    !document.body.classList.contains("wp-admin") &&
    !document.body.classList.contains("trp-editor-body") &&
    !document.body.classList.contains("login")
  ) {
    gsapAnimations();
  }

  menuColor();
}); // Chiudi document ready
