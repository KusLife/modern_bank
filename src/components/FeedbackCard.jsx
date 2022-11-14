import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content, name, title, img}) => (
    <div className='flex flex-col justify-between px-10 py-12
      rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card max-w-[370px]'>
        <img src={quotes} alt='double_quotes' className='h-[42px] w-[26px] object-contain'/>
        <p className='font-poppins font-normal text-white text-[18px] leading-[32px] my-5'>{content}</p>

        <div className='flex flex-row'>
            <img src={img} alt="user" className='rounded-full h-[48px] w-[48px]'/>
           
            <div className='flex flex-col ml-4'>
              <h1 className='font-poppins font-semibold text-white text-[20px] leading-[32px]'>{name}</h1>
              <p  className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{title}</p>
            </div>
        </div>
    </div>
  )


export default FeedbackCard