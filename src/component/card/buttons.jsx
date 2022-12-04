import React from "react";
import "../../assent/css/Card.css";

export const Buttons = ({ quantity, SetQuantity }) => {
  return (
    <div className="MainButton">
      <div className="button">
        <button
          className="decrement "
          onClick={() => SetQuantity((pre) => pre - 1)}
        >
          -
        </button>
        <button className="Count ">{quantity}</button>
        <button
          className="increment "
          onClick={() => SetQuantity((pre) => pre + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
