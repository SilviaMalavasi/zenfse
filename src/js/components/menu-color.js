import $ from "jquery";
import { rem, vw } from "../base/globals.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function menuColor() {
  gsap.registerPlugin(ScrollTrigger);

  if (
    $(".wp-block-group.has-base-background-color").length ||
    $(".wp-block-columns.has-base-background-color").length ||
    $(".gradient-to-white").length ||
    $(".gradient-from-white").length
  ) {
    const bianchi = gsap.utils.toArray(
      ".wp-block-group.has-base-background-color, .wp-block-columns.has-base-background-color"
    );
    bianchi.forEach((bianco) => {
      ScrollTrigger.create({
        trigger: bianco,
        start: "top " + 5 * rem + "px",
        end: "bottom " + 5 * rem + "px",
        onEnter: () => $(".zenfse-header").addClass("menu-fondo-bianco"),
        onLeave: () => $(".zenfse-header").removeClass("menu-fondo-bianco"),
        onEnterBack: () => $(".zenfse-header").addClass("menu-fondo-bianco"),
        onLeaveBack: () => $(".zenfse-header").removeClass("menu-fondo-bianco"),
      });
    });

    const toBianchiGradient = gsap.utils.toArray(".gradient-to-white, .tre-colonne-cont:not(.has-background)");
    toBianchiGradient.forEach((biancoGradient) => {
      let triggerValue = biancoGradient;
      if ($(biancoGradient).hasClass("tre-colonne-cont")) {
        triggerValue = $(biancoGradient).find(".wp-block-columns");
      }
      ScrollTrigger.create({
        trigger: triggerValue,
        start: "top " + (-10 * vw + 5 * rem) + "px",
        end: "bottom top+=" + 5 * rem + "px",
        onEnter: () => $(".zenfse-header").addClass("menu-fondo-bianco"),
        onLeave: () => $(".zenfse-header").removeClass("menu-fondo-bianco"),
        onEnterBack: () => $(".zenfse-header").addClass("menu-fondo-bianco"),
        onLeaveBack: () => $(".zenfse-header").removeClass("menu-fondo-bianco"),
      });
    });

    const fromBianchiGradient = gsap.utils.toArray(".gradient-from-white");
    fromBianchiGradient.forEach((biancoGradient) => {
      let parent = $(biancoGradient).parent();
      ScrollTrigger.create({
        trigger: parent,
        start: "top " + 5 * rem + "px",
        end: "top " + (-12 * rem - 10 * vw + 5 * rem) + "px",
        onEnter: () => $(".zenfse-header").addClass("menu-fondo-bianco"),
        onLeave: () => $(".zenfse-header").removeClass("menu-fondo-bianco"),
        onEnterBack: () => $(".zenfse-header").addClass("menu-fondo-bianco"),
        onLeaveBack: () => $(".zenfse-header").removeClass("menu-fondo-bianco"),
      });
    });
  }

  if (
    $(".wp-block-group.has-rosa-scuro-background-color").length ||
    $(".wp-block-columns.has-rosa-scuro-background-color").length
  ) {
    const rosaScuri = gsap.utils.toArray(
      ".wp-block-group.has-rosa-scuro-background-color, .wp-block-columns.has-rosa-scuro-background-color"
    );
    rosaScuri.forEach((rosaScuro) => {
      ScrollTrigger.create({
        trigger: rosaScuro,
        start: "top " + 5 * rem + "px",
        end: "bottom " + 5 * rem + "px",
        onEnter: () => $(".zenfse-header").addClass("menu-fondo-rosa-scuro"),
        onLeave: () => $(".zenfse-header").removeClass("menu-fondo-rosa-scuro"),
        onEnterBack: () => $(".zenfse-header").addClass("menu-fondo-rosa-scuro"),
        onLeaveBack: () => $(".zenfse-header").removeClass("menu-fondo-rosa-scuro"),
      });
    });
  }

  if (
    $(".wp-block-group.has-rosa-chiaro-background-color").length ||
    $(".wp-block-columns.has-rosa-chiaro-background-color").length
  ) {
    const rosaChiari = gsap.utils.toArray(
      ".wp-block-group.has-rosa-chiaro-background-color, .wp-block-columns.has-rosa-chiaro-background-color"
    );
    rosaChiari.forEach((rosaChiaro) => {
      ScrollTrigger.create({
        trigger: rosaChiaro,
        start: "top " + 5 * rem + "px",
        end: "bottom " + 5 * rem + "px",
        onEnter: () => $(".zenfse-header").addClass("menu-fondo-rosa-chiaro"),
        onLeave: () => $(".zenfse-header").removeClass("menu-fondo-rosa-chiaro"),
        onEnterBack: () => $(".zenfse-header").addClass("menu-fondo-rosa-chiaro"),
        onLeaveBack: () => $(".zenfse-header").removeClass("menu-fondo-rosa-chiaro"),
      });
    });
  }
}
