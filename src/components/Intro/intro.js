import React from 'react'
import './intro.css'
import profileImg from '../../assets/image.png'
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';


const Intro = () => {
  return (
    <section id="home">
        <div className="homeContent">
        <Fade direction="down">
            <h3>Hello,</h3>
            <h1>
            I'm <span className='title'>Anjali</span>
            </h1>
            <h3>
            <Typewriter
                    words={['Front End Developer']}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
              </h3>
            <p>I'm a skilled and passionate web developer with over 5 years of
            experience in creating visually appealing and user-centric websites.</p>
            <a
          href="https://drive.google.com/uc?export=download&id=1Hpm-5Y-Cxc8xSL0N5SN2jctJFvKqOGML"
          className="downloadCV-btn"
          download
        >
          Download CV
        </a>
        </Fade>
        </div>
        <div className='home-img'>
        <Fade direction="right">
        <img src={profileImg} alt='profile'/>
        </Fade>
        </div>
    </section>
  )
}

export default Intro
