import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content, name, title, img}) => (
    <div className='flex flex-col justify-between px-10 sm:py-14 py-1
      rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card max-w-[370px]'>
        <img src={quotes} alt='double_quotes' className='h-[42px] w-[26px] object-contain'/>
        <p className='font-normal text-white text-[18px] md:leading-[32px] leading-[28px] my-5'>{content}</p>

        <div className='flex flex-row'>
            <img src={img} alt="user" className='rounded-full h-[48px] w-[48px]'/>
           
            <div className='flex flex-col ml-4'>
              <h1 className='font-poppins font-semibold text-white text-[20px] leading-[32px]'>{name}</h1>
              <p  className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{title}</p>
            </div>
        </div>
        <img src={quotes} alt='double_quotes' className='self-end h-[42px] w-[26px] object-contain'/>
    </div>
  )


export default FeedbackCard