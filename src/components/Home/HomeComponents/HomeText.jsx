import React from 'react'
import {motion} from 'framer-motion'


const HomeText = () => {
  return (
    <div>
        <div className="home__main">
            <div className="home__text">
            <motion.div className="home__text__title" 
            animate={{y: 0, opacity: 1}} 
            initial={{y: 1000, opacity: 1 }} 
            transition={{duration: 1,}}>
               I create the front end of websites.
            </motion.div>
        </div>

        </div>
    </div>
  )
}

export default HomeText