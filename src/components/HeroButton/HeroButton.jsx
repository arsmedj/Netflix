import React from "react";
const HeroButton = (props) => {
  let icon = props.element;
  return (
    <a href="#" className="Button" data-primary={props.primary}>
      {props.element === undefined ? "" : <i className={icon}></i>}
      {props.text}
    </a>
  );
};

export default HeroButton;
