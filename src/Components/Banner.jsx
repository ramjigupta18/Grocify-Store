import React from 'react'

const Banner = ({ title, bgImage }) => {
  return (
    <div className='h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative'  
    style={{backgroundImage: `url(${bgImage})`}}>
      <h2 className='text-4xl text-zinc-800 bg-white rounded-xl font-bold p-5 mt-6 z-10'>{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
