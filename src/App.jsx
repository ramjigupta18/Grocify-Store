import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Fruits from './Components/Fruits';
import Dairy from './Components/Dairy';
import SeaFood from './Components/SeaFood';
import AllProducts from './Components/AllProducts';
import Layout from './Components/Layout';

import AddToCart from './Components/AddToCart';
import Wishlist from './Components/Wishlist';
import { ShopProvider } from './Components/Context/ShopContext';
import PlaceOrder from './Components/PlaceOrder';
import AboutUs from "./Components/AboutUs";
import OurProcess from "./Components/OurProcess";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <ShopProvider>
      <Routes>
          <Route path="about" element={<AboutUs />} />
          <Route path="process" element={<OurProcess />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="dairy" element={<Dairy />} />
          <Route path="seafood" element={<SeaFood />} />
          <Route path="allproducts" element={<AllProducts />} />

          <Route path="cart" element={<AddToCart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </ShopProvider>
  );
};

export default App;
