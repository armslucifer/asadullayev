import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="skills">
      <div className="skill__list">
        <ul data-aos="fade-right" data-aos-duration="1000">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React Js</li>
        </ul>
        <ul data-aos="fade-right" data-aos-duration="1500">
          <li>Gulp</li>
          <li>CSS</li>
          <li>SCSS(SASS)</li>
          <li>Bootstrap</li>
          <li>Material ui</li>
          <li>Tailwind</li>
        </ul>
        <ul data-aos="fade-right" data-aos-duration="2000">
          <li>Figma</li>
          <li>Adobe Photoshop</li>
          <li>Adobe XD</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
