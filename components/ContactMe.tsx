import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, ValidationError } from "@formspree/react";
import { motion } from 'framer-motion'

function ContactMe() {
    const [state, handleSubmit] = useForm("xaykjlko");


  return (
    <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.25,
        }}
        viewport={{
            once: true
        }}
        className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hover:text-[#F7AB0A]/50">
            Contact
        </h3>

        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-center">
                I have just what you need.{" "}
                <span className="underline decoration-[#F7AB0A]/50">Let`s Talk.</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-9 w-9 animate-pulse"/>
                    <p className="text-xl sm:text-2xl">Jordan.K.Wilia@gmail.com</p>
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 m-2 sm:w-fit xl:mx-auto">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                    <input id="name" className="contactInput" placeholder="Name" type="text" name="name"/>

                    <input id="email" className="contactInput" placeholder="Email" type="email" name="email"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                    <input id="subject" className="contactInput" placeholder="Subject" type="text" name="subject" />

                    <textarea id="message" className="contactInput" placeholder="Message" name="message"/>

                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" disabled={state.submitting}>Submit</button>
                    <ValidationError errors={state.errors} />
                    <p>{state.succeeded ? "Thank you for your message!" : ""}</p>
            </form>
        </div>
    </motion.div>
  )
}

export default ContactMe

