import React from 'react'

const Button = (props) => {
  return (
      <button className='bg-[#FF5F1F] text-white px-8 py-3 rounded-lg md:text-lg text-sm hover:scale-105 hover:bg-[#fc4b06] transition-all duration-300 cursor-pointer'>
        {props.content}
      </button>
  )
}

export default Button
