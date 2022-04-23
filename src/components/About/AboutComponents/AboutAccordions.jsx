import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutAccordions = ({ title, acctitle, active, setActive }) => {
  return (
    <div>
      <div  data-aos="fade-down" className="accordion">
        <div className="accordion__heading">
          <div className="accordion__container">
            <p>{title}</p>
            <span onClick={() => setActive(title)}>
            {active === title ? "clicked" : "click"}
            </span>
          </div>
        </div>

        <div className={(active === title ? "show" : "") + " accordion__content"}>
        <div className="accordion__container">
          <p>
            {acctitle}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutAccordions;
