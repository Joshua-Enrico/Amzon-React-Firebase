const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51JypObGRX0IZUjdjzRZsOLM2mEB3iowC6cmOZCu2GUh8q4bDfeUMvvXh0QHaXjBqll1qi7gH8pezPj7nKTIPJ81t00eQgzRJHP"
);

// Api

// Api config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunit of the currency
    currency: "usd",
  });
  response.status(201).send({
      clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-ce166/us-central1/api
