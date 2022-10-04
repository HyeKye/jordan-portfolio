import React from 'react'
import {motion} from 'framer-motion'
import Skill from "./Skill"
import { Skill as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
}

function Skills({skills}: Props) {
  return (
    <motion.div 
        initial={{ 
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }} 
        transition={{
            duration: 1.5
        }}
        className="flex flex-col 
        relative h-screen text-center 
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hover:text-[#F7AB0A]/50">
            Skills
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            Hover over a skill for current proficiency
        </h3>

        <div className="grid ssm:grid-cols-3 ssm:pt-10 sm:grid-cols-5 sm:pt-0 sm:gap-2 md:grid-cols-4 md:gap-5 md:pt-[200px] xl:pt-[200px] xl:grid-cols-5 xl:gap-cols-10 pb-5">
            {skills.map(skill => (
                <Skill 
                    key={skill._id}
                    skill={skill} />
            ))}
        </div>
    </motion.div>
  )
}

export default Skills