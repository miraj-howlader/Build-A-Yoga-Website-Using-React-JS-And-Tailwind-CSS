import React from 'react';


import Logo from '../assets/img/logo.png'
import { FaYoutube,FaInstagram, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return <section className='pb-[70px]'>
    <div className="container mx-auto">
      <div
       data-aos='fade-down'
      data-aos-delay='400'
       className=' flex flex-col justify-between items-center
       lg:flex-row gap-y-5'>
        <a href="#">
          <img src={Logo} alt="" />
        </a>

        <p>&copy; 2024 All rights reserved.</p>
        {/* social cions  */}
        <div className=' flex gap-x-4 text-orange text-lg'>
          <div className=' w-[50px] h-[50px] bg-white rounded-full
           flex justify-center items-center shadow-primary
            cursor-pointer hover:text-paragraph transition'>
            <FaYoutube />
          </div>
          <div className=' w-[50px] h-[50px] bg-white rounded-full
           flex justify-center items-center shadow-primary
            cursor-pointer hover:text-paragraph transition'>
            <FaInstagram />
          </div>
          <div className=' w-[50px] h-[50px] bg-white rounded-full
           flex justify-center items-center shadow-primary
            cursor-pointer hover:text-paragraph transition'>
            <FaGithub />
          </div>
        </div>
      </div>

    </div>
  </section>;
};

export default Footer;
