import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus(
      "Thank you for contacting Grocify! Your form is ready, but email delivery is not connected yet."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-white text-zinc-800">

        
        {/* Navbar */}
        <Navbar />

      <section className="bg-orange-50 text-center px-5 py-16 sm:py-20 mt-10">
        <p className="text-[#FF5F1F] font-semibold uppercase tracking-widest text-sm">
          Get In Touch
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold mt-4">
          Contact <span className="text-[#FF5F1F]">Us</span>
        </h1>

        <p className="text-zinc-600 max-w-xl mx-auto mt-5 leading-7">
          Have a question about Grocify? Send us a message using the form below.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-14 sm:py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold">
            We'd love to hear from you!
          </h2>

          <p className="text-zinc-600 mt-4 leading-7">
            Questions, feedback or suggestions? Fill out the form and let us
            know how we can help.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaEnvelope className="text-[#FF5F1F] text-xl" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Add your support email here
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaPhoneAlt className="text-[#FF5F1F] text-xl" />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Add your contact number here
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaMapMarkerAlt className="text-[#FF5F1F] text-xl" />
              </div>
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Grocify Online Grocery Store
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 bg-white border border-zinc-100 shadow-lg rounded-2xl p-5 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full min-w-0 border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-[#FF5F1F]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full min-w-0 border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-[#FF5F1F]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block font-medium mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              required
              className="w-full min-w-0 border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-[#FF5F1F]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              required
              className="w-full min-w-0 border border-zinc-300 rounded-lg px-4 py-3 outline-none resize-y focus:border-[#FF5F1F]"
            />
          </div>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className="text-sm text-[#FF5F1F]"
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#FF5F1F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      
        {/* Footer */}
        <Footer />

    </main>
  );
};

export default ContactUs;
