import $ from "jquery";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export function gallery() {
  $(".zenfse-block.gallery").each(function (index, el) {
    var swiper_pagination = $(el).find(".swiper-pagination")[0];

    var swiper = new Swiper($(el).find(".swiper")[0], {
      modules: [Pagination],
      pagination: {
        el: swiper_pagination,
        clickable: true,
      },
      slidesPerView: 1,
      speed: 800,
    });
  });
}

$(gallery);
