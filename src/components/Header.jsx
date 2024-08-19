import React, { useEffect, useState } from "react";

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Logo from "../assets/img/logo.png";
const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 36 ? setHeader(true) : setHeader(false)
    })
  })
  return (
    <section
     data-aos='fade-down'
      data-aos-delay='400'
      className={`${header ? "top-0" : "top-9"} fixed
   w-full bg-white max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md
    h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all
     duration-500 flex items-center justify-between`}
    >
      <div className=" flex items-center">
        {/* logo  */}
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* nav  */}
        <div className=" hidden lg:flex">
          <Nav />
        </div>
      </div>

      <div className=" flex items-center ">
        {/* buttons  */}
        <div className=" flex gap-x-4 lg:gap-x-9">
          <button
            className=" text-heading font-medium text-sm
           lg:text-base hover:text-orange transition-all"
          >
            Sign In
          </button>
          <button
            className="btn btn-md lg:px-[30px]
           bg-orange-100 border border-orange text-orange
            hover:bg-orange-200 hover:text-white transition-all"
          >
            Sign Up
          </button>
        </div>
        {/* nav mobile  */}
        <NavMobile />
      </div>
    </section>
  );
};

export default Header;
