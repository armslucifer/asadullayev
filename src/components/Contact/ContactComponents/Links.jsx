import React from 'react'
import Instagram from './ContactImg/instagram.svg'
import Whatsapp from './ContactImg/whatsapp.svg'
import Github from './ContactImg/github.svg'
import Mail from './ContactImg/mail.svg'
import {motion} from 'framer-motion'

const Links = () => {
  return (
    <div>
        <motion.div className="links__inner" animate={{y: 0, opacity: 1}} initial={{y: -1000, opacity: 1 }} transition={{
                duration: 1,
            }}>
           <a target="_blank" href="https://www.instagram.com/armslucifer/">
               <img className='social__links'  src={Instagram} alt="" />
           </a>
           <a target="_blank" href="https://api.whatsapp.com/send?phone=+998936324045">
               <img className='social__links' src={Whatsapp} alt="" />
           </a>
           <a target="_blank" href="https://github.com/armslucifer">
               <img className='social__links' src={Github} alt="" />
           </a>
           <a target="_blank" href="mailto:abdulkuddusasadullaev@gmail.com">
               <img className='social__links' src={Mail} alt="" />
           </a>
        </motion.div>
    </div>
  )
}

export default Links