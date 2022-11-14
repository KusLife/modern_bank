import React from 'react'
import { logo } from '../assets'
import { socialMedia, footerLinks } from '../constants'
import styles from '../style'


const Footer = () => (
    <section className={`${styles.flexCenter, styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt='hoobank' className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
             A new way to make the payments easy, reliable and secure.
          </p>
        </div>


        <div className='w-full flex flex-[1.5] flex-row flex-wrap justify-between md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium leading-[27px] text-[18px] text-white'>{footerLink.title}</h4>
              <ul className='list-none mt-4' >
                {footerLink.links.map((link, index) => (
                    <li key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary
                    ${index !== footerLink.links.length - 1 ? 'mb-2' : 'mb-0' }`}>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex items-center justify-between md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] '>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2021 HooBank. All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] cursor-pointer object-contain ${index !== socialMedia -1 ? 'mr-4' : 'mr-0'}`}/>
          ))}
        </div>
      </div>
    </section>
  )


export default Footer