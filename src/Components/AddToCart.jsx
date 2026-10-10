import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import { useShop } from "./Context/ShopContext";

const AddToCart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useShop();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section className="min-h-screen bg-white pt-28 sm:pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 sm:mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-800">
              Shopping Cart
            </h1>
            <p className="text-zinc-500 mt-2">
              {totalItems} item(s) in your cart
            </p>
          </div>

          <Link
            to="/allproducts"
            className="bg-[#FF5F1F] text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-[#fc4b06] transition"
          >
            Continue Shopping
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 sm:py-24 bg-zinc-50 rounded-2xl">
            <FaShoppingBag className="text-5xl text-zinc-300 mx-auto" />
            <h2 className="text-2xl font-bold mt-5 text-zinc-800">
              Your cart is empty
            </h2>
            <p className="text-zinc-500 mt-2">
              Add some fresh products to your cart.
            </p>
            <Link
              to="/allproducts"
              className="inline-block mt-6 bg-[#FF5F1F] text-white px-6 py-3 rounded-lg"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 border border-zinc-200 rounded-xl"
                >
                  <div className="w-full sm:w-28 h-36 sm:h-28 shrink-0 bg-zinc-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-800 break-words">
                      {item.name}
                    </h3>

                    <p className="text-[#FF5F1F] font-semibold mt-2">
                      ${item.price.toFixed(2)} each
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mt-4">
                      <div className="flex items-center border border-zinc-300 rounded-lg overflow-hidden">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label={`Decrease ${item.name} quantity`}
                          className="px-4 py-2 hover:bg-zinc-100"
                        >
                          −
                        </button>

                        <span className="px-3 py-2 min-w-10 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          aria-label={`Increase ${item.name} quantity`}
                          className="px-4 py-2 hover:bg-zinc-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="text-lg font-bold text-zinc-800 sm:text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-zinc-50 rounded-xl p-5 sm:p-6 border border-zinc-200 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-zinc-800">Order Summary</h2>

              <div className="flex justify-between gap-3 mt-6 text-zinc-600">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between gap-3 mt-4 text-zinc-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between gap-3 mt-4 text-zinc-600">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="border-t border-zinc-200 mt-5 pt-5 flex justify-between gap-3 text-lg font-bold">
                <span>Total</span>
                <span className="text-[#FF5F1F]">${totalPrice.toFixed(2)}</span>
              </div>
              
              <Link
                to="/place-order"
                className="block w-full rounded-full bg-emerald-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddToCart;
