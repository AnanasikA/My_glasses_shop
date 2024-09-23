import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripePromise } from '../stripe';

const CheckoutForm = ({ handleClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const amount = cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      return;
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: amount,
        }),
      });

      const data = await response.json();

      if (data.success) {
        dispatch(clearCart());
        handleClose(); // Zamknięcie okna po pomyślnym zakończeniu płatności
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4"
        disabled={!stripe}
      >
        Pay ${cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2)}
      </button>
    </form>
  );
};

const Cart = () => {
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleOpenCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckingOut(false);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between mb-6 border-b pb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">{item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-8 text-right">
                <h3 className="text-2xl font-semibold text-gray-800">Total Price: ${getTotalPrice()}</h3>
                <button
                  onClick={handleOpenCheckout}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isCheckingOut && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h3>
            <Elements stripe={stripePromise}>
              <CheckoutForm handleClose={handleCloseCheckout} />
            </Elements>
            <button
              onClick={handleCloseCheckout}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;





