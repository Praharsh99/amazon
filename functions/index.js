const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvRkArvXHDYOCtSYTEz4S0zMQuSO3otVCQvcvHA2WGGtWnbDFUqiuiaH5uC3uDzhuAhhOE1Oq4fmCasBns41C900HHLn8tfw"
);

// APP Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.get("/praharsh", (req, res) => {
  res.status(200).send("Hii Praharsh");
});

app.post("/payments/create", async (req, res) => {
  const { total } = req.query;
  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);
