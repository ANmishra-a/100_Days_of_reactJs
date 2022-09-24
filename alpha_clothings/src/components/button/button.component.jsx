import React from "react";
import "./button.style.css";

const BUTTEN_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType }) => {
  return <button className={`button-container `}>{children}</button>;
};
export default Button;
