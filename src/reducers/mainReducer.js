export const INITIAL_STATE = {
  isLoading: true,
  active: false,
  theme: localStorage.getItem("theme"),
  visible: false,
};

export const mainReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LOADING_STATUS":
      return { ...state, isLoading: action.payload };
    case "CHANGE_ACTIVE_STATUS":
      return { ...state, active: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case "CHANGE_VISIBLE_STATUS":
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};
