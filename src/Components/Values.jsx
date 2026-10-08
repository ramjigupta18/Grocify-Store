import React from 'react'
import Heading from './Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from './Img/basket-full-vegetables.png'

const Values = () => {

    const leftValues = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>

                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-[#FF5F1F] w-16 h-16 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.tittle}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

     const rightValues = value.slice(2).map(item => {
        return (
            <div key={item.id} className='flex items-center gap-7'>

                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-[#FF5F1F] w-16 h-16 rounded-full'>{item.icon}</span>
                </div>

                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.tittle}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight='Our' heading=' Values'/>

        <div className='flex md:flex-row flex-col gap-14 md:gap-5 mt-16'>
            {/* Left Values */}
            <div className='md:min-h-100 gap-14 flex flex-col justify-between'>
                {leftValues}
            </div>

            {/* Image */}
            <div className='md:flex w-1/2 hidden'>
                <img src={Basket}  />
            </div>

            {/* Right Values */}
            <div className='md:min-h-100 gap-14 flex flex-col justify-between'>
                {rightValues}
            </div>

        </div>

    </div>
   </section>
  )
}

export default Values


const value = [
    {
        id:1,
        tittle: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />,
    },
    {
        id:2,
        tittle: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />,
    },
    {
        id:3,
        tittle: 'Food Safety',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />,
    },
    {
        id:4,
        tittle: '100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />,
    },
]