import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTrash, FaShoppingBag } from "react-icons/fa";
import { useShop } from './Context/ShopContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  return (
    <section className="min-h-screen bg-white pt-28 sm:pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 sm:mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-800">
              My Wishlist
            </h1>
            <p className="text-zinc-500 mt-2">
              {wishlist.length} saved product(s)
            </p>
          </div>

          <Link
            to="/allproducts"
            className="bg-[#FF5F1F] text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-[#fc4b06] transition"
          >
            Explore Products
          </Link>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-16 sm:py-24 bg-zinc-50 rounded-2xl">
            <FaHeart className="text-5xl text-red-300 mx-auto" />
            <h2 className="text-2xl font-bold mt-5 text-zinc-800">
              Your wishlist is empty
            </h2>
            <p className="text-zinc-500 mt-2">
              Tap the heart on a product to save it here.
            </p>
            <Link
              to="/allproducts"
              className="inline-block mt-6 bg-[#FF5F1F] text-white px-6 py-3 rounded-lg"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-100 rounded-xl p-4 sm:p-5 min-w-0"
              >
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(item.id)}
                    aria-label={`Remove ${item.name} from wishlist`}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="h-36 sm:h-44">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-800 mt-3 break-words">
                  {item.name}
                </h3>

                <p className="text-xl font-bold text-[#FF5F1F] mt-2">
                  ${item.price.toFixed(2)}
                </p>

                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="w-full mt-4 flex justify-center items-center gap-2 bg-[#FF5F1F] text-white py-3 px-2 rounded-lg hover:bg-[#fc4b06] transition text-sm sm:text-base"
                >
                  <FaShoppingBag />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
