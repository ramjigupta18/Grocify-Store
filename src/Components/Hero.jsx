import React from 'react'
import Grocery from './Img/grocery.png'
import Button from './Button'


const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-24 pt-36'>

            {/* Hero Content */}
            <div className='flex-1'>
                <span className='bg-amber-100 text-[#FF5F1F] text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                <h1 className='md:text-7xl text-[40px] leading-[50px] md:leading-[80px] font-bold mt-4'>Tasty Organic <span className='text-[#FF5F1F]'>Fruits</span> & <span className='text-[#FF5F1F]'>Veggies</span><br /> In Your City</h1>

                <p className='text-zinc-600 md:text-lg text-sm max-w-[530px] mt-5 mb-10'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                <Button content='Shop Now'/>
            </div>

            {/* Hero Image */}
            <div className='flex-1'>
                <img src={Grocery} alt="Hero Image" />

            </div>

        </div>
    </section>
  )
}

export default Hero
