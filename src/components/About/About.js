import React from 'react'
import { useState } from 'react';
import Skills from './AboutComponents/Skills'
import AboutAccordions from './AboutComponents/AboutAccordions'
import AboutTop from './AboutComponents/AboutTop';
import './About.css';
import IntersetingFacts from './AboutComponents/IntersetingFacts';


export const About = () => {

  const [active, setActive] = useState('');


  return (
    <div className='about'>
      <div className='container'>
        <AboutTop/>
        <AboutAccordions title="What's my first name, last name" acctitle="Asadullayev Abdulquddus. Or just Sasha!" active={active} setActive={setActive}/>
        <AboutAccordions title="How old am I" acctitle="I am 19 years old. I was born on August 31, 2002 at 8:00 p.m. " active={active} setActive={setActive}/>
        <AboutAccordions title="Where do I live" acctitle="In the earth)" active={active} setActive={setActive}/>
        <AboutAccordions title="What I can do for you" acctitle="I can build an incredibly cool website that you'll brag about later :) But I'm a front-end developer, don't forget, honey." active={active} setActive={setActive}/>
        <AboutAccordions title="A brief description of my work" acctitle="I am a certified development specialist. I know a programming language such as JavaScript. In addition, I know the task manager Gulp. And also the markup language html and of course css. In my work I use the JavaScript library React js. I write clean, clear, adaptive code for any screen size." active={active} setActive={setActive}/>
        <Skills/>
        {/* <IntersetingFacts/> */}
      </div>
    </div>
  )
}
export default About