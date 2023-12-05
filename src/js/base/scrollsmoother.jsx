export var smoother;
export function doScrollSmoother() {
  async function loadScrollSmoother() {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const { ScrollSmoother } = await import("gsap/ScrollSmoother");

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }

  loadScrollSmoother();
}
