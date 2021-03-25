import { SLIDER_IMAGE, SLIDER_CURRENT } from "../actions/action-types";

const initialState = {
  currentSlide: "",
  imageSrc: "",
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDER_IMAGE:
      return {
        ...state,
        imageSrc: action.imageSrc,
      };

    case SLIDER_CURRENT:
      return {
        ...state,
        currentSlide: action.currentSlide,
      };

    default:
      return state;
  }
};

export default sliderReducer;
