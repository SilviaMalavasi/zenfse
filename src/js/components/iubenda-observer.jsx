import $ from "jquery";

export async function iubendaObserver() {
  if ($(".video-iframe").length) {
    const { playVimeo } = await import("./play-vimeo.jsx");

    $(".video-iframe").each(function () {
      let target = $(this)[0];

      var observer = new MutationObserver(function (mutations) {
        if ($(mutations[mutations.length - 1].addedNodes[0]).hasClass("_iub_cs_activate-activated")) {
          playVimeo(target);
          observer.disconnect;
        }
      });

      observer.observe(target, {
        attributes: true,
        childList: true,
        characterData: true,
      });
    });
  }
}
