import React from 'react'
import InterestingImg from './AboutImg/interesting-facts.png'

const IntersetingFacts = () => {
  return (
    <div className='facts'>
        <div className="inter__top">
            <div className="inter__title">Interesting Facts About Me...</div>
        </div>
        <div className="inter__bottom">
        <div className="inter__facts">
            <div className="inteseting__item">
            <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
            <div className="inteseting__item">
                 <img className='int__img' src={InterestingImg} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default IntersetingFacts