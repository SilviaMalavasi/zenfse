import $ from "jquery";

export async function playVimeo(video) {
  if ($(".video-iframe").length) {
    let width = $(video).attr("data-width");
    let height = $(video).attr("data-height");
    $(video).css("padding-top", (height / width) * 100 + "%");

    const { default: Player } = await import("@vimeo/player");
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    gsap.registerPlugin(ScrollTrigger);

    var player = new Player(video);
    player.setVolume(0);
    player.pause();

    var isPlaying =
      player.currentTime > 0 && !player.paused && !player.ended && player.readyState > player.HAVE_CURRENT_DATA;
    var start = "top 70%";
    var end = "bottom top";

    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    if ($(video).parents(".fade-in-up").length) {
      start = `top-=${4 * rem}px 70%`;
      end = `bottom-=${4 * rem}px top`;
    }

    ScrollTrigger.create({
      scrub: true,
      trigger: video,
      start: start,
      end: end,
      onToggle: function (self) {
        if (self.isActive) {
          if (!isPlaying) {
            player.play();
          }
        } else {
          player.pause();
        }
      },
      toggleActions: "play pause reverse none",
    });

    if (video.getBoundingClientRect().top < window.innerHeight) {
      player.play();
    }
  }
}
