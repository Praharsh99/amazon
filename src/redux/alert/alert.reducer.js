import AlertActionTypes from "./alert.types";

const INITIAL_STATE = {
  alertObj: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlertActionTypes.SET_ALERT_ACTION:
      return {
        ...state,
        alertObj: action.payload,
      };

    default:
      return state;
  }
};

export default alertReducer;
