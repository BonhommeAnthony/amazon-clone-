const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HtufpFoqBAMA8BzCp3vlNLMWpy7QH4lTeYLBD88X5HycHDkFnX00bQgLDKpA7xOcUWfKuztj4NkS36ahl42KAAU000YXcHAam"
);

//API

//App config
const app = express();
//Midllewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen Command
exports.api = functions.https.onRequest(app);
