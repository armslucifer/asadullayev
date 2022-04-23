import React from 'react'
import {motion} from 'framer-motion'
import AboutMe from './AboutImg/about-me.gif'

const AboutTop = () => {
  return (
    <div className='about__top'>
        <motion.div className="about__top__title"
        animate={{opacity: 1}} 
        initial={{opacity: 0}} 
        transition={{duration: 1}}>
            <h4>About Me...</h4>
        </motion.div>
    </div>
  )
}

export default AboutTop