import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skill } from '../typings'

type Props = {
  skill: Skill;
}

function Skill({skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <img 
            src={urlFor(skill.image).url()}
            className=" object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duation-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-1xl font-bold text-black opacity-100">{skill.progress}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill