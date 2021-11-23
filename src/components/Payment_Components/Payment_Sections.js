import React, { useEffect} from "react";
import "../../css/Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../Providers/StateProvider";
import CheckoutProduct from "../Checkout_Comp/CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Providers/StateProviderFunctions/reducer";
import axios from "../../axios";
import { db } from "../../firebase";

function Payment_Sections() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = React.useState(false);
  const [processing, setProcessing] = React.useState("");

  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);
  const [clientSecret, setClientSecret] = React.useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (event) => {
    // strypes stuff
    event.preventDefault();
    setProcessing(true);
    //const payload = await stripe.confirmCardPayment(processing, {
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
          })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        history("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    // handle the change
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          {
            <Link to="/checkout">
              {basket?.reduce((sum, item) => item.qty + sum, 0)} Items
            </Link>
          }
          )
        </h1>
        {/* Payment section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email || "Guest"}</p>
            <p>Peru</p>
            <p>Lima, callao 139</p>
          </div>
        </div>

        {/* Item list */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
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

        {/* Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Order Total: <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment_Sections;
