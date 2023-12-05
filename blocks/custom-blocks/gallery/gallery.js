import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function gallery() {
  $(".zenfse-block.gallery").each(function (index, el) {
    var swiper_pagination = $(el).find(".swiper-pagination")[0];
    var swiper_prev = $(el).find(".swiper-navigation").find(".swiper-prev")[0];
    var swiper_next = $(el).find(".swiper-navigation").find(".swiper-next")[0];

    var swiper = new Swiper($(el).find(".swiper")[0], {
      modules: [Navigation, Pagination],
      pagination: {
        el: swiper_pagination,
        clickable: true,
      },
      navigation: {
        nextEl: swiper_next,
        prevEl: swiper_prev,
      },
      slidesPerView: 1,
    });
  });
}

$(gallery);
