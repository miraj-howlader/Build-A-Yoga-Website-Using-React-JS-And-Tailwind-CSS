import React, { useEffect, useRef, useState } from "react";

import emailjs from '@emailjs/browser'

const Contact = () => {
  const [emailMessage,setEmailMessage]=useState('')
  const [emailTextColor,setEmailTextColor]=useState('')
  const form = useRef()

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setEmailMessage('')
    }, 3000)
    return () => clearTimeout(timer)

  }, [emailMessage])
  
  const sendEmail = (e) => {
 
    e.preventDefault();

    emailjs
      .sendForm('service_73qe10a', 'template_2o332hd', form.current, {
        publicKey: '6UNnoTsjJpi2CsdR3',
      })
      .then(
        () => {
          setEmailMessage('Your email was send :')
          setEmailTextColor('green')
        },
        (error) => {
          setEmailMessage('Your email was not sent :')
          setEmailTextColor('red')
        },
      );
      e.target.reset();
  };

  return (
    <section className=" section-sm lg:pt-[210px]">
      <div className="container mx-auto">
        <div
          className=" flex flex-col lg:flex-row lg:gap-x-[74px]
       bg-contact bg-no-repeat bg-cover min-h-[600px]"
        >
          {/* text  */}
          <div
           data-aos='fade-right'
            data-aos-delay='400'
            className=" flex-1 flex flex-col justify-center
          pl-8"
          >
            <h2 className=" h2 mb-3 lg:mb-7">
              Get in Touch with Us for Yoga Course.
            </h2>
            <p className=" mb-7 lg:mb-0">
              Get in touch use for any kind of help. We are here to give you the
              best and also hre to help you to find your yoga course.
            </p>
          </div>
          {/*
         required name='user_firstname' form  */}
          <form
           data-aos='fade-down'
          data-aos-delay='400'
          onSubmit={(e) => sendEmail(e)}
          ref={form}
            className=" flex-1 shadow-primary rounded-[20px]
          p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px]
           lg:-mt-20"
          >
            <input
              className="form-control"
              placeholder="First name"
              type="text"
              required
              name="user_firstname"
            />
            <input
              className="form-control"
              placeholder="Last name"
              type="text"
              required
              name="user_firstname"
            />
            <input
              className="form-control"
              placeholder="Email address"
              type="email"
              required
              name="user_email"
            />
           
            <textarea className="form-control
             py-5 h-[165px] resize-none"
             placeholder="Message"
             name="user_message"></textarea>
            <button type="submit" className=" btn btn-lg btn-orange">Send message</button>
            <p style={{color:emailTextColor}}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
