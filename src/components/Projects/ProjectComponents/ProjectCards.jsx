import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectOne from "./ProjectImg/work-1.png";
import ProjectTwo from "./ProjectImg/work-2.png";
import ProjectUch from "./ProjectImg/work-3.png";

const ProjectCards = () => {
  const { ref, inView } = useInView({});
  const animation = useAnimation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
    console.log("use effect hook, inView", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div>
      <div ref={ref} className="project__cards">
        <motion.div className="card" data-aos="fade-right">
          <div className="card__top">1</div>
          <div className="card__content">
            <img className="project__photo" src={ProjectOne} alt="" />
            <div className="porject__info">
              <div className="project__card__title">Balance App</div>
              <div className="project__cardtext">
                <p>
                  The site was created using html, css (scss), js and I used
                  gulb to speed things up. You can see the site itself and the codes.
                </p>
              </div>
              <div className="card__btn ">
                <a
                  target="_blank"
                  href="https://github.com/armslucifer/balanceapp.git"
                  className="btn btn__margin"
                >
                  Show Code
                </a>
                <a target="_blank" href="https://balanceapp.com/" className="btn">
                  Show Web
                </a>
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div className="card" data-aos="fade-right">
          <div className="card__top">2</div>
          <div className="card__content">
            <img className="project__photo" src={ProjectTwo} alt="" />
            <div className="porject__info">
              <div className="project__card__title">Dacode</div>
              <div className="project__cardtext">
                <p>
                  The site was created using html, css (scss), js and I used
                  gulb to speed things up. Currently, the site can be viewed and
                  evaluated. In addition, there is the source code on my github
                  account!
                </p>
              </div>
              <div className="card__btn">
                <a
                  target="_blank"
                  href="https://github.com/armslucifer/dacode.git"
                  className="btn btn__margin"
                >
                  Show Code
                </a>
                <a target="_blank" href="https://www.dacode.es/" className="btn">
                  Show Web
                </a>
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div className="card" data-aos="fade-right">
          <div className="card__top">3</div>
          <div className="card__content">
            <img className="project__photo" src={ProjectUch} alt="" />
            <div className="porject__info">
              <div className="project__card__title">dorfjungs</div>
              <div className="project__cardtext">
                <p>
                  Very unusual and cool site, worked with pleasure and finished the project in 3 days! 
                </p>
              </div>
              <div className="card__btn">
                <a
                  target="_blank"
                  href="https://github.com/armslucifer/dorfjungs.git"
                  className="btn btn__margin"
                >
                  Show Code
                </a>
                <a target="_blank" href="https://jobs.dorfjungs.com/" className="btn">
                  Show Web
                </a>
              </div>
            </div>
          </div>
        </motion.div>



      </div>
    </div>
  );
};

export default ProjectCards;
