import { combineReducers } from "redux";
import sliderReducer from "./slider-reducer";
import tabsReducer from "./tabs-reducer";

export default combineReducers({
  SLIDER: sliderReducer,
  TABS: tabsReducer,
});
