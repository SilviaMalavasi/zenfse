import $ from "jquery";
import swiperCss from "bundle-text:swiper/swiper-bundle.min.css";
import { vw } from "../base/globals";

export function gallery() {
  async function loadSwiper() {
    const { Swiper: Swiper, Autoplay, Navigation, Pagination, EffectFade } = await import("swiper");

    let container = document.getElementById("main");
    let style = document.createElement("style");
    style.textContent = swiperCss;
    container.appendChild(style);

    $(".swiper").each(function (index, el) {
      $(el).addClass("swiper_" + index);

      window["swiper_name"] = "swiper_" + index;

      var swiper_pagination = $(this).nextAll(".swiper-pagination")[0];

      var swiper_prev = $(this).nextAll(".swiper-navigation").find(".swiper-prev")[0];
      var swiper_next = $(this).nextAll(".swiper-navigation").find(".swiper-next")[0];

      const swiper_name = new Swiper($(".swiper_" + index)[0], {
        modules: [Autoplay, Navigation, Pagination, EffectFade],
        speed: 1500,
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1,
        breakpoints: {
          781: {
            slidesPerView: 3,
            spaceBetween: 2 * vw,
          },
        },
        pagination: {
          el: swiper_pagination,
          clickable: true,
        },
        navigation: {
          nextEl: swiper_next,
          prevEl: swiper_prev,
        },
      });
    });
  }
  loadSwiper();
}
