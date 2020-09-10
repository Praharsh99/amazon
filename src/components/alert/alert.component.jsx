import React from "react";

import "./alert.style.css";

const Alert = ({ message, submessage, type, position }) => {
  const colors = {
    success: {
      background: "rgba(42, 157, 144)",
      border: "#3c6e71",
    },
    error: {
      background: "rgba(230, 57, 70)",
      border: "#a4161a",
    },
    warning: {
      background: "#ffbf69",
      border: "#ff9f1c",
    },
  };

  position = position ? position : { top: "0%", left: "50%" };

  const style = {
    backgroundColor: colors[type].background,
    borderColor: colors[type].border,
    ...position,
  };

  const subMessage = {
    backgroundColor: colors[type].border,
  };

  return (
    <div className="alert" style={style}>
      <p className="alert__message">{message}</p>
      {submessage && (
        <p className="alert__submessage" style={subMessage}>
          {submessage}
        </p>
      )}
    </div>
  );
};

export default Alert;
