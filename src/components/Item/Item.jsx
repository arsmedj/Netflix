import React from "react";
import ListToggle from "../ListToggle/ListToggle";

const Item = (props) => {
  return (
    <div
      className="Item"
      style={{
        backgroundImage: "url(" + props.backDrop + ")",
        backgroundSize: "contain",
      }}
    >
      <div className="overlay">
        <div className="title">{props.name}</div>
        <div className="raiting">{props.rating}</div>
        <div className="plot">{props.plot}</div>
        <ListToggle />
      </div>
    </div>
  );
};

export default Item;
