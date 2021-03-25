import { TABS_ACTIVE, TABS_SHOW_POPUP } from "./action-types";

export const setActiveTab = (value) => ({
  type: TABS_ACTIVE,
  activeTab: value,
});

export const setIsShowPopup = (flag) => ({
  type: TABS_SHOW_POPUP,
  isShowPopup: flag,
});
