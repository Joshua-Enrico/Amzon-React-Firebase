import React from "react";
import "../../css/CheckoutProduct.css";
import { useStateValue } from "../Providers/StateProvider";
import Quantity from "./Quantity";

function CheckoutProduct({ id, image, title, price, rating, qty }) {
  


  const [{ }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // Remove items from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Quantity qty={ qty }/>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-labelledby="star">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
