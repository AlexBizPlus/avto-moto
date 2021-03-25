import { TABS_ACTIVE, TABS_SHOW_POPUP } from "../actions/action-types";

const initialState = {
  activeTab: 0,
  isShowPopup: false,
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABS_ACTIVE:
      return {
        ...state,
        activeTab: action.activeTab,
      };

    case TABS_SHOW_POPUP:
      return {
        ...state,
        isShowPopup: action.isShowPopup,
      };

    default:
      return state;
  }
};

export default tabsReducer;
