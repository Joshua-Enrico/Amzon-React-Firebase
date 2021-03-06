import React from "react";
import "../css/Product.css";
import { useStateValue } from "./Providers/StateProvider";
import { toast } from 'react-toastify';

function Product({id, title, image, price , rating}) {
  const [{ }, dispatch] = useStateValue();
  const Msg = ({ closeToast, toastProps }) => (
    <div className='popup__Item' >
      <img className='popup__Image' alt='' src={ image } />
      <p>{ title }</p>
    </div>
  )
  const addTobasket = () => {
   // dispatch item into data layer
   dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        qty: 1,

      }
   })
    toast(<Msg />);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{ title }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{ price }</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_) =>  (
            <span  role='img' aria-labelledby="star">⭐</span>
          ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      ></img>
      <button onClick={addTobasket}>Add to basket</button>
    </div>
  );
}

export default Product;
