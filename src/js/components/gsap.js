import $ from "jquery";
import { mediaQueryAllMobile, rem, vw, top_pos_animations } from "../base/globals.js";

export function gsapAnimations() {
  async function loadGsap() {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const { TextPlugin } = await import("gsap/TextPlugin");
    const { SplitText } = await import("gsap/SplitText");

    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    // Fade in

    if ($(".fade-in").length) {
      const fade_ins = gsap.utils.toArray(".fade-in");
      fade_ins.forEach((fade_in) => {
        const fade_in_anim = gsap.to(fade_in, {
          autoAlpha: 1,
          duration: 1,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: fade_in,
          start: top_pos_animations,
          onEnter: () => fade_in_anim.play(),
        });

        ScrollTrigger.create({
          trigger: fade_in,
          start: "top bottom",
          onEnterBack: () => fade_in_anim.restart(),
          onLeaveBack: () => fade_in_anim.pause(0),
        });
      });
    }

    // Fade in up

    if ($(".fade-in-up").length) {
      const fade_in_ups = gsap.utils.toArray(".fade-in-up");
      fade_in_ups.forEach((fade_in_up) => {
        var hasChildAnimation = $(fade_in_up).hasClass("child-animation");
        var fade_in_up_anim_child;

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            let fade_in_up_child = $(fade_in_up).find("img");
            fade_in_up_anim_child = gsap.to(fade_in_up_child[0], {
              scale: "1",
              duration: 1.5,
            });
          }
        }

        const fade_in_up_anim_parent = gsap.to(fade_in_up, {
          y: "0",
          autoAlpha: "1",
          duration: 1.5,
        });

        const fade_in_up_anim = gsap.timeline({ paused: true });
        fade_in_up_anim.add(fade_in_up_anim_parent);

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            fade_in_up_anim.add(fade_in_up_anim_child, "<");
          }
        }

        ScrollTrigger.create({
          trigger: fade_in_up,
          start: "top bottom+=" + 14 * rem + "px",
          onEnter: () => fade_in_up_anim.play(),
          onLeave: () => fade_in_up_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_up,
          start: `top bottom+=${14 * rem}px`,
          onEnterBack: () => fade_in_up_anim.restart(),
          onLeaveBack: () => fade_in_up_anim.pause(0),
        });
      });
    }

    // Fade in left

    if ($(".fade-in-left").length) {
      const fade_in_lefts = gsap.utils.toArray(".fade-in-left");
      fade_in_lefts.forEach((fade_in_left) => {
        var hasChildAnimation = $(fade_in_left).hasClass("child-animation");
        var fade_in_left_anim_child;

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            let fade_in_left_child = $(fade_in_left).find("img");
            fade_in_left_anim_child = gsap.to(fade_in_left_child[0], {
              scale: "1",
              duration: 1.5,
            });
          }
        }

        const fade_in_left_anim_parent = gsap.to(fade_in_left, {
          x: "0",
          autoAlpha: 1,
          duration: 1.5,
        });

        const fade_in_left_anim = gsap.timeline({ paused: true });
        fade_in_left_anim.add(fade_in_left_anim_parent);

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            fade_in_left_anim.add(fade_in_left_anim_child, "<");
          }
        }

        ScrollTrigger.create({
          trigger: fade_in_left,
          start: top_pos_animations,
          onEnter: () => fade_in_left_anim.play(),
        });

        ScrollTrigger.create({
          trigger: fade_in_left,
          start: "top bottom",
          onEnterBack: () => fade_in_left_anim.restart(),
          onLeaveBack: () => fade_in_left_anim.pause(0),
        });
      });
    }

    // Fade in right

    if ($(".fade-in-right").length) {
      const fade_in_rights = gsap.utils.toArray(".fade-in-right");
      fade_in_rights.forEach((fade_in_right) => {
        var hasChildAnimation = $(fade_in_right).hasClass("child-animation");
        var fade_in_right_anim_child;

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            let fade_in_right_child = $(fade_in_right).find("img");
            fade_in_right_anim_child = gsap.to(fade_in_right_child[0], {
              scale: "1",
              duration: 1.5,
            });
          }
        }

        const fade_in_right_anim_parent = gsap.to(fade_in_right, {
          x: "0",
          autoAlpha: 1,
          duration: 1.5,
        });

        const fade_in_right_anim = gsap.timeline({ paused: true });
        fade_in_right_anim.add(fade_in_right_anim_parent);

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            fade_in_right_anim.add(fade_in_right_anim_child, "<");
          }
        }

        ScrollTrigger.create({
          trigger: fade_in_right,
          start: top_pos_animations,
          onEnter: () => fade_in_right_anim.play(),
        });

        ScrollTrigger.create({
          trigger: fade_in_right,
          start: "top bottom",
          onEnterBack: () => fade_in_right_anim.restart(),
          onLeaveBack: () => fade_in_right_anim.pause(0),
        });
      });
    }

    // Fade in stagger

    if ($(".fade-in-stagger-cont").length) {
      $(".fade-in-stagger-cont").each(function () {
        const fade_in_stagger = $(this);
        $(this).find(">").toggleClass("fade-in-stagger");
        const fade_in_this_stagger = $(this).find(".fade-in-stagger");
        const fade_in_stagger_anim = gsap.to(fade_in_this_stagger, {
          duration: 1,
          autoAlpha: 1,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_stagger,
          start: "top 70%",
          onEnter: () => fade_in_stagger_anim.play(),
          onLeave: () => fade_in_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_stagger_anim.restart(),
          onLeaveBack: () => fade_in_stagger_anim.pause(0),
        });
      });
    }

    // Fade in up stagger

    if ($(".fade-in-up-stagger-cont").length) {
      $(".fade-in-up-stagger-cont").each(function () {
        const fade_in_up_stagger = $(this);
        $(this).find(">").toggleClass("fade-in-up-stagger");
        const fade_in_up_this_stagger = $(this).find(".fade-in-up-stagger");

        const fade_in_up_stagger_anim = gsap.to(fade_in_up_this_stagger, {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_up_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_up_stagger,
          start: "top 90%",
          onEnter: () => fade_in_up_stagger_anim.play(),
          onLeave: () => fade_in_up_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_up_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_up_stagger_anim.restart(),
          onLeaveBack: () => fade_in_up_stagger_anim.pause(0),
        });
      });
    }

    // Fade in left stagger

    if ($(".fade-in-left-stagger-cont").length) {
      $(".fade-in-left-stagger-cont").each(function () {
        const fade_in_left_stagger = $(this);
        $(this).find(">").toggleClass("fade-in-left-stagger");
        const fade_in_left_this_stagger = $(this).find(".fade-in-left-stagger");

        const fade_in_left_stagger_anim = gsap.to(fade_in_left_this_stagger, {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_left_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_left_stagger,
          start: "top 70%",
          onEnter: () => fade_in_left_stagger_anim.play(),
          onLeave: () => fade_in_left_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_left_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_left_stagger_anim.restart(),
          onLeaveBack: () => fade_in_left_stagger_anim.pause(0),
        });
      });
    }

    // Fade in right stagger

    if ($(".fade-in-right-stagger-cont").length) {
      $(".fade-in-right-stagger-cont").each(function () {
        const fade_in_right_stagger = $(this);
        $(this).find(">").toggleClass("fade-in-right-stagger");
        const fade_in_right_this_stagger = $(this).find(".fade-in-right-stagger");

        const fade_in_right_stagger_anim = gsap.to(fade_in_right_this_stagger, {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_right_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_right_stagger,
          start: "top 70%",
          onEnter: () => fade_in_right_stagger_anim.play(),
          onLeave: () => fade_in_right_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_right_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_right_stagger_anim.restart(),
          onLeaveBack: () => fade_in_right_stagger_anim.pause(0),
        });
      });
    }

    // Characters animation

    if ($(".character-animation").length) {
      const character_animations = gsap.utils.toArray(".character-animation");
      character_animations.forEach((character_animation) => {
        const splittingOutput = new SplitText(character_animation, {
          type: "chars",
          charsClass: "char",
        });

        function shuffle(array) {
          var currentIndex = array.length,
            temporaryValue,
            randomIndex;
          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }

        const shuffledChars = shuffle(splittingOutput.chars);

        const character_animation_anim = gsap.timeline({ paused: true }).to(shuffledChars, {
          duration: 0.6,
          autoAlpha: 1,
          scale: 1,
          stagger: {
            each: 0.02,
            from: "edges",
          },
          ease: "power2.out",
        });

        ScrollTrigger.create({
          trigger: character_animation,
          start: top_pos_animations,
          onEnter: () => character_animation_anim.play(),
        });

        ScrollTrigger.create({
          trigger: character_animation,
          start: "top bottom",
          onEnterBack: () => character_animation_anim.restart(),
          onLeaveBack: () => character_animation_anim.pause(0),
        });
      });
    }

    // SVG animation

    if ($(".svg-animation").length) {
      const svg_animations = gsap.utils.toArray(".svg-animation");
      svg_animations.forEach((svg_animation) => {
        ScrollTrigger.create({
          trigger: svg_animation,
          start: top_pos_animations,
          onEnter: () => {
            $(svg_animation).addClass("active");
          },
          onLeave: () => {
            $(svg_animation).removeClass("active");
          },
        });

        ScrollTrigger.create({
          trigger: svg_animation,
          start: "top bottom",
          onEnterBack: () => {
            $(svg_animation).addClass("active");
          },
          onLeaveBack: () => $(svg_animation).removeClass("active"),
        });
      });
    }

    // GSAP Numeri

    gsap.registerPlugin(TextPlugin);

    if ($(".numeri").length) {
      $(".numeri").each(function () {
        const trigger = $(this).parent().parent() || $(this).parent();

        let numeroNode = $(this)
          .find("strong")
          .contents()
          .filter(function () {
            return this.nodeType === 3; // Node.TEXT_NODE
          })[0];

        const numeri_anim = gsap.from(numeroNode, {
          textContent: 0,
          duration: 1,
          snap: { textContent: 1 },
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        numeri_anim.pause(0);

        ScrollTrigger.create({
          trigger: trigger,
          start: "top 70%",
          onEnter: () => numeri_anim.play(),
        });

        ScrollTrigger.create({
          trigger: trigger,
          start: "top bottom",
          onEnterBack: () => numeri_anim.restart(),
          onLeaveBack: () => numeri_anim.pause(0),
        });
      });
    }
  }

  loadGsap();
}
