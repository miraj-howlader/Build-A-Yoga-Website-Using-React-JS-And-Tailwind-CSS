import React from "react";

import { Parallax } from "react-parallax";
import Image from "../assets/img/hero/guy.png";
import  Header from '../components/Header'
const Hero = () => {
  return (
    <section className="min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
      <div className="container mx-auto">
           {/* header  */}
           <Header />
           <div className=" flex flex-col items-center
            lg:flex-row lg:items-start pt-32">
            <div>
              <h1
              data-aos='fade-down'
              data-aos-delay='400'
               className="h1 mb-3 lg:mb-[22px]">Yoga to  <br />Realease Stress </h1>
              <p
               data-aos='fade-left'
               data-aos-delay='500'
               className="mb-6 lg:mb-12 max-w-[480px]
               lg:text-lg">Yoga is a way of life, rather than a chore Counteracts the 
                stresses of modern life by becoming more mindful and
                 compassionate</p>
                 {/* btn groupe  */}
                 <div
                  data-aos='fade-down'
                  data-aos-delay='400'
                  className="mb-12 space-x-4">
                  <button className=" btn btn-sm lg:btn-lg
                   btn-orange">Get started </button>
                  <button className=" btn btn-sm lg:btn-lg
                   text-heading bg-transparent border
                    border-stroke-1 transition px-4 hover:bg-stroke-3">
                    Learn more </button>
                 </div>
            </div>
            {/* image  */}
            <div className=" w-full bg-circle bg-cover lg:bg-none
             lg:w-auto">
              <div
               data-aos='fade-left'
                  data-aos-delay='600'
               className=" flex-1 flex justify-center
               lg:justify-end">
                <div className=" w-[234px] h-[234px] lg:w-[504px]
                 lg:h-[744px] lg:mt-0">
                  <Parallax className=" w-full h-full p-28
                   lg:p-16" bgImage={Image}
                   bgImageAlt="guy image"
                   strength={200}
                   />
                </div>
              </div>
            </div>
           </div>
      </div>
    </section>
  );
};

export default Hero;
