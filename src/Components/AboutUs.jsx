import React from "react";
import { FaLeaf, FaHeart, FaTruck } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <main className="bg-white text-zinc-800">

        {/* Navbar */}
        <Navbar />

      <section className="bg-orange-50 px-5 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#FF5F1F] font-semibold uppercase tracking-widest text-sm">
              About Grocify
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight">
              Fresh Food, <span className="text-[#FF5F1F]">Happy Life!</span>
            </h1>

            <p className="text-zinc-600 mt-6 leading-7">
             Welcome to Grocify! Our goal is to make shopping for fresh fruits, vegetables, and daily grocery essentials easy, convenient, and enjoyable.
            </p>

            <p className="text-zinc-600 mt-3 leading-7">
             We value quality products, a simple shopping experience, and customer satisfaction. With Grocify, make your everyday grocery shopping easier and more convenient!
            </p>

            <a
              href="/allproducts"
              className="inline-block mt-7 bg-[#FF5F1F] text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Explore Products
            </a>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-3xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
              alt="Fresh fruits and vegetables"
              className="w-full h-72 sm:h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose <span className="text-[#FF5F1F]">Grocify?</span>
          </h2>
          <p className="text-zinc-500 mt-4">
            A simple and convenient way to shop for your daily essentials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="p-7 rounded-2xl bg-orange-50 text-center">
            <FaLeaf className="text-4xl text-[#FF5F1F] mx-auto" />
            <h3 className="text-xl font-bold mt-5">Fresh Selection</h3>
            <p className="text-zinc-600 mt-3 leading-6">
              Explore a variety of fruits, vegetables and grocery essentials.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-orange-50 text-center">
            <FaHeart className="text-4xl text-[#FF5F1F] mx-auto" />
            <h3 className="text-xl font-bold mt-5">Customer First</h3>
            <p className="text-zinc-600 mt-3 leading-6">
              We aim to make your shopping experience smooth and convenient.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-orange-50 text-center">
            <FaTruck className="text-4xl text-[#FF5F1F] mx-auto" />
            <h3 className="text-xl font-bold mt-5">Easy Shopping</h3>
            <p className="text-zinc-600 mt-3 leading-6">
              Find your essentials, manage your cart and place your order easily.
            </p>
          </div>
        </div>
      </section>


      {/* Footer */}
        <Footer />


    </main>
  );
};

export default AboutUs;
