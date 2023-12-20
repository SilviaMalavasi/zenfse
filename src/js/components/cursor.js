import $ from "jquery";
import gsap from "gsap";

import "../../css/components/cursor.scss";

export default function Cursor() {
  let cursorOutline = $("#cursor-outline");
  let cursorDot = $("#cursor-dot");
  let cursorOutlineHeight = cursorOutline.height();
  let cursorDotHeight = cursorDot.height();
  $(window).on("mousemove", moveCursorOutline);
  $(window).on("mousemove", moveCursorDot);
  $(".has-rosa-scuro-background-color").on("mouseenter", rosaScuroOutline);
  $(".has-rosa-scuro-background-color").on("mouseleave", rosaScuroOutlineRevert);
  $(".has-rosa-chiaro-background-color").on("mouseenter", rosaChiaroOutline);
  $(".has-rosa-chiaro-background-color").on("mouseleave", rosaChiaroOutlineRevert);
  $("a, button, .swiper-next, .swiper-prev, input, textarea, .swiper-pagination-bullet").on("mouseenter", cursorLink);
  $("a, button, .swiper-next, .swiper-prev, input, textarea, .swiper-pagination-bullet").on(
    "mouseleave",
    cursorLinkRevert
  );

  function moveCursorOutline(event) {
    gsap.to(cursorOutline, {
      x: event.clientX - 0.5 * cursorOutlineHeight,
      y: event.clientY - 0.5 * cursorOutlineHeight,
      delay: 0.03,
    });
  }

  function moveCursorDot(event) {
    gsap.to(cursorDot, {
      x: event.clientX - 0.5 * cursorDotHeight,
      y: event.clientY - 0.5 * cursorDotHeight,
    });
  }

  function cursorLink() {
    gsap.to(cursorDot, {
      border: "solid 2px #fff",
      background: "#213DED",
      scale: 1.3,
      duration: 0.3,
    });
  }
  function cursorLinkRevert() {
    gsap.to(cursorDot, {
      border: "solid 2px #F28F80",
      background: "#f8d5c9",
      scale: 1,
      duration: 0.3,
    });
  }

  function rosaScuroOutline() {
    gsap.to(cursorOutline, {
      border: "solid 2px #fff",
      duration: 0.3,
    });
  }
  function rosaScuroOutlineRevert() {
    gsap.to(cursorOutline, {
      border: "solid 2px #F28F80",
      duration: 0.3,
    });
  }

  function rosaChiaroOutline() {
    gsap.to(cursorDot, {
      background: "#fff",
      duration: 0.3,
    });
  }
  function rosaChiaroOutlineRevert() {
    gsap.to(cursorDot, {
      background: "#f8d5c9",
      duration: 0.3,
    });
  }
}
