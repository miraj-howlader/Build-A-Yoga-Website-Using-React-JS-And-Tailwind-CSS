import React from 'react';


import { courses } from '../data';
import { BsStarFill,BsStarHalf } from 'react-icons/bs';
const Courses = () => {
  return <section className=' section-sm
   lg:section-lg'>
    <div className="container mx-auto">
      {/* text  */}
      <div
       data-aos='fade-down'
        data-aos-delay='400'
       className=' text-center mb-16 lg:mb-32'>
        <h2 className='h2 mb-3 lg:mb-[18px]'>Popular Courses</h2>
       <p className=' max-w-[480px] mx-auto'>Practise anywhere, anytime. EXplore a new way to 
        exercise and learn more about yourself. We are providing
        the best
       
       </p>
      </div>
      {/* courses list  */}
      <div
       data-aos='fade-left'
       data-aos-duration='1600'
       data-aos-offset='400'
       className=' flex flex-col lg:flex-row lg:gap-x-[33px]
       gap-y-24 mb-7 lg:mb-14'>
        {courses.map((item,index)=>{
          const {image,title,delay,desc,link}=item;
          return <div
          className=' w-full bg-white hover:shadow-primary
           max-w-[368px] px-[18px] pb-[26px] lg:px-[28px]
            lg:pb-[38px] flex flex-col rounded-[14px]
             transition'
           key={index}>
            {/* image  */}
            <div className='-mt-[38px] lg:-mt-12 mb-4
             lg:mb-6'>
              <img src={image} alt="" />
            </div>
            {/* text  */}
            <div>
              <h4 className=' text-lg lg:text-xl font-semibold
               mb-2 lg:mb-4'>{title}</h4>
              <p>{desc}</p>
            </div>
            
            {/* bottom  */}
            <div className=' flex items-center justify-between
             mt-8 mb-2 lg:mb-0'>
              {/* stars  */}
              <div className=' flex text-orange gap-x-2'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <a className=' font-medium' href="#">{link}</a>
            </div>
          </div>
        })}
      </div>
      {/* btn  */}
      <div
       data-aos='fade-down'
       data-aos-delay='400'
       className=' flex justify-center'>
        <button className=' btn btn-sm btn-orange'>Browse all</button>
      </div>
    </div>
   </section>;
};

export default Courses;
