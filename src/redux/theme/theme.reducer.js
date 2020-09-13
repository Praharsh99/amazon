import ThemeActionTypes from "./theme.types";

const INITIAL_STATE = {
  darkTheme: false,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME_DARK_MODE:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };

    default:
      return state;
  }
};

export default themeReducer;
