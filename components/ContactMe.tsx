import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import {motion} from 'framer-motion'

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

type Props = {}

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        console.log(formData)
        window.location.href = `mailto:jordan.k.wilia@gmail?subject=${formData.subject}&body=${formData.message}`
    };

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
            <h4 className="text-4xl font-semibold text-center">
                I have just what you need.{" "}
                <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-9 w-9 animate-pulse"/>
                    <p className="text-2xl">Jordan.K.Wilia@gmail.com</p>
                </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} className="contactInput" placeholder="Name" type="text" />
                    <input {...register('email')} className="contactInput" placeholder="Email" type="email" />
                </div>
                    <input {...register('subject')} className="contactInput" placeholder="Subject" type="text" />

                    <textarea {...register('message')} className="contactInput" placeholder="Message"/>
                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default ContactMe