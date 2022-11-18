import React from 'react'

const Button = ({styles, value}) => (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
    font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]
    hover:animate-pulse 
    ${styles}`}>{!value ? 'Get Started' : value}</button>
  )

export default Button