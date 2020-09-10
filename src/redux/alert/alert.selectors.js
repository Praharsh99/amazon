import { createSelector } from "reselect";

const selectAlert = (state) => state.alert;

export const selectAlertObj = createSelector(
  [selectAlert],
  (alert) => alert.alertObj
);
