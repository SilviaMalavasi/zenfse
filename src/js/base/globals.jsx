// JS Media Queries

export const mediaQueryAllMobile =
  window.matchMedia("(hover: none) and (pointer: coarse) and (not (any-pointer: fine))").matches ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/* 
PRODUCTION
export const mediaQuerySmartphonesOnly = window.matchMedia(
  "(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (max-width: 780px)"
).matches; 

export const isMobile = window.matchMedia(
  "(hover: none) and (pointer: coarse) and (not (any-pointer: fine)), (min-device-pixel-ratio: 2), (max-width: 780px)"
).matches;
*/

export const mediaQuerySmartphonesOnly = window.matchMedia("(max-width: 780px)").matches;

export const mediaQueryTabletsOnly = window.matchMedia(
  "(hover: none) and (pointer: coarse) and (not (any-pointer: fine)) and (min-width: 781px)"
).matches;

// vw and vh

export const vw = window.innerWidth * 0.01;
export const vh = window.innerHeight * 0.01;

// 1rem rounded

export const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
export const onerem = parseInt(rem * 1);

export let top_pos_animations = "top 85%";
if (mediaQueryAllMobile) {
  top_pos_animations = "top 90%";
}
