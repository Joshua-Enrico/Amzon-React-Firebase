import React  from "react";
import "../../css/CheckoutProduct.css";
import { useStateValue } from "../Providers/StateProvider";
import useForceUpdate from 'use-force-update';


function CheckoutProduct({ id, image, title, price, rating, qty }) {

  const [{}, dispatch] = useStateValue();
  const forceUpdate = useForceUpdate();
  const update_qty = (e) => {
    dispatch({
      type: "UPDATE_QTY",
      id: id,
      qty: parseInt(e.currentTarget.value),
    });
  };

  const removeFromBasket = () => {
    // Remove items from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    forceUpdate();
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
        <select id="QtyValue" name="ROL" onChange={update_qty}>
          <option hidden value="">
            Qty: {qty}
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>+10</option>
        </select>
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
