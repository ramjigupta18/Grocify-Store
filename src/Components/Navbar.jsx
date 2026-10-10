import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { useShop } from "./Context/ShopContext";

const Navbar = () => {
  const { cart, wishlist } = useShop();

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const wishlistCount = wishlist.length;

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Process", path: "/process" },
    { name: "Contact Us", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `font-semibold tracking-wider transition-colors duration-200 ${
      isActive
        ? "text-[#FF5F1F]"
        : "text-zinc-800 hover:text-[#FF5F1F]"
    }`;

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm.trim();

    if (query) {
      window.location.href = `/allproducts?search=${encodeURIComponent(query)}`;
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-[12vh] min-h-[75px] flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl sm:text-3xl font-bold shrink-0"
        >
          Gr<span className="text-[#FF5F1F] uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-6 lg:gap-x-10 xl:gap-x-14 hidden">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Nav Actions */}
        <div className="flex items-center gap-x-3 sm:gap-x-5">
          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex items-center p-1 border-2 border-[#FF5F1F] rounded-full"
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              autoComplete="off"
              aria-label="Search products"
              className="w-28 xl:w-36 h-9 px-3 focus:outline-none rounded-full bg-transparent min-w-0"
            />

            <button
              type="submit"
              aria-label="Search"
              className="bg-[#FF5F1F] text-white w-9 h-9 flex items-center justify-center rounded-full text-xl hover:bg-orange-600 transition"
            >
              <IoSearch />
            </button>
          </form>

          {/* Wishlist */}
          <NavLink
            to="/wishlist"
            aria-label={`Wishlist, ${wishlistCount} items`}
            className={({ isActive }) =>
              `relative text-2xl transition-colors ${
                isActive
                  ? "text-[#FF5F1F]"
                  : "text-zinc-800 hover:text-[#FF5F1F]"
              }`
            }
          >
            <GoHeartFill />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                {wishlistCount}
              </span>
            )}
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className={({ isActive }) =>
              `relative text-2xl transition-colors ${
                isActive
                  ? "text-[#FF5F1F]"
                  : "text-zinc-800 hover:text-[#FF5F1F]"
              }`
            }
          >
            <HiMiniShoppingBag />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-[#FF5F1F] text-white text-xs font-bold">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-zinc-800 text-3xl md:hidden"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl px-5 sm:px-8 py-7 md:hidden transition-all duration-300 ${
            showMenu
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-y-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center p-1 border-2 border-[#FF5F1F] rounded-full mt-7 max-w-md mx-auto"
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              autoComplete="off"
              aria-label="Search products"
              className="flex-1 min-w-0 h-10 px-3 focus:outline-none bg-transparent rounded-full"
            />

            <button
              type="submit"
              aria-label="Search"
              className="bg-[#FF5F1F] text-white w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-orange-600 transition"
            >
              <IoSearch />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
