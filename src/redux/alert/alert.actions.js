import AlertActionTypes from "./alert.types";

export const setAlert = (alert) => ({
  type: AlertActionTypes.SET_ALERT_ACTION,
  payload: alert,
});
