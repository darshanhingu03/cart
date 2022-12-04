import React, { useMemo, useState } from "react";
import "../../assent/css/Card.css";
import { DeleteSVG, HeartSVG } from "../../assent/icon";
import { Buttons } from "./buttons";

export const Card = ({ product }) => {
  const { name, image, price, qauntity, size, color } = product;
  const [quantity, SetQuantity] = useState(1);

  const calcPrice = useMemo(() => price * quantity, [price, quantity]);
  return (
    <div className="Container" key={name}>
      <div className="cardImage">
        <img src={image} alt="T-shirt" />
      </div>
      <div className="cardDetails">
        <div className="product">
          <span className="productName">{name}</span>
          <span className="productPrice">{`$ ${calcPrice}` ?? 0}</span>
        </div>
        <div className="productDetails">
          <span className="fixPrice">{price}</span>
          <span className="quantity">{qauntity}</span>
        </div>
        <div className="allButton">
          <div className="button">
            <button className="productSize">{size}</button>
            <button className="productColour">{color}</button>
            <Buttons SetQuantity={SetQuantity} quantity={quantity} />
          </div>
          <div className="edit">
            <div className="heartSVG">
              <HeartSVG height={15} width={15} />
              <span>save </span>
            </div>
            <div>|</div>
            <div className="deleteSVG">
              <DeleteSVG height={15} width={15} />
              <span>Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
