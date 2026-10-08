import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb"; 
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg': ''}`}>
        <nav className='relative max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>

            {/* Logo */}
            <Link to="/" className='text-3xl font-bold'>Gr<span className='text-[#FF5F1F] uppercase'>o</span>cify</Link>

            {/* Desktop Menu */}
            <ul className='md:flex items-center gap-x-14 hidden'>
                <li>
                    <a href="/" className='font-semibold tracking-wider text-[#FF5F1F]'>Home</a>
                </li>
                <li>
                    <a href="/" className='font-semibold tracking-wider text-zinc-800 hover:text-[#FF5F1F] '>About Us</a>
                </li>
                <li>
                    <a href="/" className='font-semibold tracking-wider text-zinc-800 hover:text-[#FF5F1F]'>Process</a>
                </li>
                <li>
                    <a href="/" className='font-semibold tracking-wider text-zinc-800 hover:text-[#FF5F1F]'>Contact Us</a>
                </li>
            </ul>

            {/* Nav Action */}
            <div className='flex items-center gap-x-5'>

                {/* Input Field */}
                <div className='md:flex p-1 border-2 border-[#FF5F1F] rounded-full hidden'>
                    <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none rounded-full' />
                       <button className='bg-[#FF5F1F] text-white w-10 h-10 flex items-center justify-center rounded-full text-xl'>
                        <IoSearch />
                        </button>
                </div>

                <a href="/" className='text-zinc-800 text-2xl'>
                    <GoHeartFill />
                </a>
                <a href="/" className='text-zinc-800 text-2xl'>
                   <HiMiniShoppingBag />
                </a>

                {/* Hamburger */}
                <button className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                    {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                </button>
            </div>

            {/* Mobile Menu */}

              <ul className={`absolute top-full left-0 w-full bg-white backdrop-blur-xl flex flex-col items-center gap-y-10 p-10 rounded-xl transition-all duration-500 md:hidden         ${showMenu ? "opacity-100 translate-y-0": "opacity-0 -translate-y-5 pointer-events-none"}`}>

                <li>
                    <a href="/" className='font-semibold tracking-wider text-[#FF5F1F]'>Home</a>
                </li>
                <li>
                    <a href="/" className='font-semibold tracking-wider text-zinc-800 hover:text-[#FF5F1F] '>About Us</a>
                </li>
                <li>
                    <a href="/" className='font-semibold tracking-wider text-zinc-800 hover:text-[#FF5F1F]'>Process</a>
                </li>
                <li>
                    <a href="/" className='font-semibold tracking-wider text-zinc-800 hover:text-[#FF5F1F]'>Contact Us</a>
                </li>
                <li className='flex p-1 border-2 border-[#FF5F1F] rounded-full md:hidden'>

                    <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none bg-transparent rounded-full' />

                       <button className='bg-[#FF5F1F] text-white w-10 h-10 flex items-center justify-center rounded-full text-xl'>
                        <IoSearch />
                        </button>

                </li>
            </ul>




        </nav>
    </header>
  )
}

export default Navbar










