import React, { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { useShop } from "./Context/ShopContext";

const Cards = ({ image, name, price, product }) => {
  const [cartMessage, setCartMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const currentProduct = product || {
    id: name,
    image,
    name,
    price,
  };

  const handleAddToCart = () => {
    const added = addToCart(currentProduct);

    if (added === true) {
      setCartMessage("Product added to cart successfully!");
      setMessageType("success");
    } else {
      setCartMessage("Product already added to cart!");
      setMessageType("error");
    }
  };

  return (
    <div className="bg-zinc-100 p-4 sm:p-5 rounded-xl min-w-0">
      {/* Card Icons */}
      <div className="flex justify-between items-center gap-3">
        <button
          type="button"
          onClick={() => toggleWishlist(currentProduct)}
          aria-label={
            isInWishlist(currentProduct.id)
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`text-2xl sm:text-3xl transition-colors ${
            isInWishlist(currentProduct.id)
              ? "text-red-500"
              : "text-zinc-300 hover:text-red-500"
          }`}
        >
          <FaHeart />
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="bg-[#FF5F1F] text-white text-lg sm:text-xl p-3 sm:px-4 sm:py-3 rounded-lg hover:bg-[#fc4b06] transition-colors"
        >
          <FaPlus />
        </button>
      </div>

      {/* Cart Message */}
      {cartMessage && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-3 text-xs sm:text-sm font-medium ${
            messageType === "success"
              ? "text-emerald-600"
              : "text-red-600"
          }`}
        >
          {cartMessage}
        </p>
      )}

      {/* Card Image */}
      <div className="w-full h-40 sm:h-52 mt-3">
        <img
          src={product?.image || image}
          className="w-full h-full mx-auto object-contain"
          alt={name || product?.name || "Product"}
        />
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-lg sm:text-2xl font-semibold break-words">
          {name || product?.name}
        </h3>

        <p className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-3">
          ${Number(price ?? product?.price ?? 0).toFixed(2)}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className="bg-[#FF5F1F] text-white w-full sm:w-auto px-5 sm:px-8 py-3 rounded-lg text-sm sm:text-lg hover:scale-105 hover:bg-[#fc4b06] transition-all duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
