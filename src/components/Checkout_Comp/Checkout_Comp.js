import React from "react";
import "../../css/Checkout.css";
import { useStateValue } from "../Providers/StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutComp() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
           {/* Checkout Product */}
           {basket.map(item => (
             <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              qty={item.qty}
             />
           ))}      
        </div>
      </div>

      <div className="checkout__right" >
          <Subtotal/>
      </div>
    </div>
  );
}

export default CheckoutComp;
