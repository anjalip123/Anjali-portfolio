import React from "react";
import "./experience.css";
import { Fade } from 'react-awesome-reveal';

function Experience() {
  return (
    <section id="work">
      <h2 className="work-title">
        My Experience
      </h2>
      <p className="work-desc">
        Highly skilled and adaptable Developer with 5 years of experience in
        frontend technologies such as HTML,CSS,Javascript and ReactJS.I am
        excited to bring my skills and experience to help business achieve their
        goals and create a strong online presence
      </p>
      <div className="workbox-container">
      <Fade direction="right">
        <div className="work-box">
          <div className="workbox-info">
            <h3>UI Developer</h3>
            <p className="workYear">FIS (September 2018 - March 2024)</p>
            <ul className="worksParag">
              <li>
                Developed responsive user interfaces using CSS, HTML, and
                JavaScript, improving UI/UX design.
              </li>
              <li>
                Collaborated with Business Analysts to analyze client business
                requirements, resulting in the preparation of comprehensive
                solution documents. Achieved a 20% reduction in
                misinterpretation of requirements, enhancing project clarity
              </li>
              <li>
              Contributed to accurate story estimations, facilitating effective sprint planning. Managed task allocation resulting
              in a 30% increase in team productivity and on-time project delivery.
              </li>
            </ul>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
}

export default Experience;
