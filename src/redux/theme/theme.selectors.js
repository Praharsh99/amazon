import { createSelector } from "reselect";

const selectTheme = (state) => state.theme;

export const selectDarkTheme = createSelector(
  [selectTheme],
  (theme) => theme.darkTheme
);
