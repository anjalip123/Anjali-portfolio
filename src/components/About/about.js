import React from 'react'
import './about.css'
import aboutImg from '../../assets/image.png'
import { Fade } from 'react-awesome-reveal';

function About() {
  return (
  <section id="about">
    <div className="about-img">
    <Fade direction="left">
        <img src={aboutImg} alt='aboutImage'/>
        </Fade>
    </div>
    <div className="about-content">
    <Fade direction="right">
        <h2 className="heading">About Me</h2>
        <p>I am a BTech graduate in Information Technology and a front-end developer with over 5 years of experience creating intuitive and functional user interfaces. I excel in HTML, CSS, JavaScript, and modern frameworks, consistently delivering projects that exceed client expectations. Actively seeking a challenging role in the UAE, I aim to leverage my adaptability and quick learning ability to contribute to innovative projects within a collaborative team environment.</p>
        </Fade>
    </div>
  </section>
  )
}

export default About
