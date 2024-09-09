require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Użyj swojego klucza tajnego Stripe

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Parsowanie JSON

const products = require('./products.json');

// Endpoint do pobierania produktów
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint do obsługi płatności
app.post('/api/checkout', async (req, res) => {
  const { paymentMethodId, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, 
      currency: 'usd', 
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.json({ success: true, paymentIntent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
