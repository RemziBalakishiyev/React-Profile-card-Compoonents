import React from "react";
import buttonClass from "./Button.module.css";
function Button({ type, children, color }) {
  if (buttonClass[color]) {
    return (
      <button
        type={type}
        className={`${buttonClass.button}  ${buttonClass[color]}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`${buttonClass.button}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}

export default Button;
