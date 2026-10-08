import React from 'react'

const Heading = (props) => {
  return (
      <div className='w-fit mx-auto'>
            <h2 className='text-zinc-800 md:text-5xl text-[2.5rem] font-bold'><span className='text-[#FF5F1F]'>{props.highlight}</span>{props.heading}</h2>
            <div className="w-32 h-1 bg-[#FF5F1F] md:mt-4 mt-2 ml-auto mr-2 rounded-full"></div>
        </div>

  )
}

export default Heading
