import React from "react";
import { FaSearch, FaShoppingCart, FaClipboardCheck, FaBoxOpen } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const steps = [
  {
    icon: FaSearch,
    number: "01",
    title: "Explore Products",
    description:
      "Browse fruits, vegetables and other grocery products available on Grocify.",
  },
  {
    icon: FaShoppingCart,
    number: "02",
    title: "Add to Cart",
    description:
      "Choose your favourite products and add them to your shopping cart.",
  },
  {
    icon: FaClipboardCheck,
    number: "03",
    title: "Place Your Order",
    description:
      "Review your selected products and complete the order process.",
  },
  {
    icon: FaBoxOpen,
    number: "04",
    title: "Get Your Groceries",
    description:
      "Your order process is complete. Delivery depends on the service configured for your store.",
  },
];

const OurProcess = () => {
  return (
    <main className="bg-white min-h-[60vh]">

        {/* Navbar */}
        <Navbar />


      <section className="bg-orange-50 px-5 py-16 sm:py-20 text-center mt-10">
        <p className="text-[#FF5F1F] font-semibold uppercase tracking-widest text-sm">
          How It Works
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold mt-4">
          Our <span className="text-[#FF5F1F]">Process</span>
        </h1>

        <p className="text-zinc-600 max-w-2xl mx-auto mt-5 leading-7">
          Follow a few simple steps to make your grocery shopping easy and convenient.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative border border-orange-100 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <span className="absolute top-4 right-5 text-3xl font-bold text-orange-100">
                  {step.number}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto">
                  <Icon className="text-2xl text-[#FF5F1F]" />
                </div>

                <h2 className="text-xl font-bold mt-6">{step.title}</h2>

                <p className="text-zinc-600 mt-3 leading-6 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/allproducts"
            className="inline-block bg-[#FF5F1F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Start Shopping
          </a>
        </div>
      </section>


      {/* Footer */}
      <Footer />


    </main>
  );
};

export default OurProcess;
