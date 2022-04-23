import React from 'react'
import SettingPhoto from './ProjectImg/setting.png'
import {motion} from 'framer-motion'

const ProjectTitle = () => {
  return (
    <div>
        <motion.div className="project__title" 
            animate={{opacity: 1}} 
            initial={{opacity: 0}} 
            transition={{duration: 1}}>
              <div className="project__text">
                <h4>My Projects...</h4>
              </div>
                  <motion.div className="project__icon" animate={{rotate: 360}} transition={{duration: 4, repeat: Infinity}}>
                <img className='setting__img' src={SettingPhoto} alt="" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default ProjectTitle