import React from "react";
import Header from "../Base_Components/Header";
import Payment_Sections from "./Payment_Sections";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JypObGRX0IZUjdjVJwEP1xEkdm1vDftTpkY7P9ErH2c9wzFgnGKUYIDplmp2agsvQZQJ67OrG1PauiWuk3GPfXa00V6JQOwIz"
);

function Payment() {
  return (
    <>
      <Header />
      <Elements stripe={promise}>
        <Payment_Sections />
      </Elements>
    </>
  );
}

export default Payment;
