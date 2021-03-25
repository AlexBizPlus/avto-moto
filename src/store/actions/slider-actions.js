import { SLIDER_IMAGE, SLIDER_CURRENT } from "./action-types";

export const setSliderImage = (value) => ({
  type: SLIDER_IMAGE,
  imageSrc: value,
});

export const setSliderCurrent = (value) => ({
  type: SLIDER_CURRENT,
  currentSlide: value,
});
