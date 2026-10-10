import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from './Context/ShopContext';
import Navbar from './Navbar';
import Footer from './Footer';

const PlaceOrder = () => {
  const { cart, removeFromCart } = useShop();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const [payment, setPayment] = useState('Cash on Delivery');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('Your cart is empty!');
      navigate('/cart');
      return;
    }

    const id = 'ORD' + Date.now().toString().slice(-8);

    const order = {
      orderId: id,
      customer,
      items: cart,
      total,
      payment,
      orderDate: new Date().toLocaleString(),
      status: 'Order Placed',
    };

    // Demo: order ko browser ke localStorage mein save karna
    const oldOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...oldOrders, order]));

    setOrderId(id);
    setOrderPlaced(true);

    // Cart ko empty karna
    cart.forEach((item) => removeFromCart(item.id));
  };

  if (orderPlaced) {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-10 text-center shadow-lg">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
            ✓
          </div>

          <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
            Order Placed Successfully!
          </h1>

          <p className="mb-5 text-gray-600">
            Thank you for shopping with us. Your order has been placed.
          </p>

          <div className="mb-6 rounded-xl bg-gray-50 p-4 text-left">
            <p className="mb-2 text-sm text-gray-500">Order ID</p>
            <p className="mb-4 break-all font-bold text-emerald-600">
              {orderId}
            </p>

            <div className="flex justify-between gap-3">
              <span className="text-gray-600">Total Amount</span>
              <span className="font-bold">₹{total.toFixed(2)}</span>
            </div>

            <div className="mt-3 flex justify-between gap-3">
              <span className="text-gray-600">Payment</span>
              <span className="text-right font-medium">{payment}</span>
            </div>
          </div>

          <Link
            to="/"
            className="block w-full rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-800">
          Your cart is empty
        </h2>
        <p className="mb-6 text-gray-500">
          Add some products before proceeding to checkout.
        </p>
        <Link
          to="/"
          className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

        {/* Navbar */}
        <Navbar />

      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-emerald-600">
            CHECKOUT
          </p>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Place Your Order
          </h1>
          <p className="mt-2 text-gray-500">
            Enter your delivery details and confirm your order.
          </p>
        </div>

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <div className="space-y-6 lg:col-span-2">
            {/* Delivery Details */}
            <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
              <h2 className="mb-6 text-xl font-bold text-gray-800">
                1. Delivery Details
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[6-9][0-9]{9}"
                    title="Enter a valid 10-digit Indian mobile number"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Address
                  </label>
                  <textarea
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    placeholder="House number, street, area"
                    rows={3}
                    required
                    className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    name="city"
                    value={customer.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    PIN Code
                  </label>
                  <input
                    name="pincode"
                    type="text"
                    inputMode="numeric"
                    value={customer.pincode}
                    onChange={handleChange}
                    placeholder="6-digit PIN code"
                    pattern="[0-9]{6}"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
              <h2 className="mb-5 text-xl font-bold text-gray-800">
                2. Payment Method
              </h2>

              <label className="mb-3 flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-emerald-500">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={payment === 'Cash on Delivery'}
                  onChange={(e) => setPayment(e.target.value)}
                  className="h-4 w-4 accent-emerald-600"
                />
                <span className="text-2xl">💵</span>
                <span>
                  <span className="block font-semibold text-gray-800">
                    Cash on Delivery
                  </span>
                  <span className="text-sm text-gray-500">
                    Pay when your order arrives
                  </span>
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-emerald-500">
                <input
                  type="radio"
                  name="payment"
                  value="UPI (Demo)"
                  checked={payment === 'UPI (Demo)'}
                  onChange={(e) => setPayment(e.target.value)}
                  className="h-4 w-4 accent-emerald-600"
                />
                <span className="text-2xl">📱</span>
                <span>
                  <span className="block font-semibold text-gray-800">
                    UPI
                  </span>
                  <span className="text-sm text-gray-500">
                    Demo option — no real payment is processed
                  </span>
                </span>
              </label>
            </section>
          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm sm:p-7">
            <h2 className="mb-5 text-xl font-bold text-gray-800">
              Order Summary
            </h2>

            <div className="mb-5 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="break-words font-medium text-gray-700">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity || 1}
                    </p>
                  </div>
                  <span className="shrink-0 font-semibold text-gray-800">
                    ₹{(
                      Number(item.price) * (item.quantity || 1)
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className="font-medium text-emerald-600">Free</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4 text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Place Order
            </button>

            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="mt-3 w-full rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel & Return to Cart
            </button>

            <Link
              to="/"
              className="mt-4 block text-center text-sm font-medium text-emerald-700 hover:underline"
            >
              Continue Shopping
            </Link>
          </aside>
        </form>
      </div>

       
      {/* Footer */}
      <Footer />

    </div>
  );
};

export default PlaceOrder;
