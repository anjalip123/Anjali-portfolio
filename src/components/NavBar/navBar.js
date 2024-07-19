import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './navBar.css'
import menu from '../../assets/menu.png'

function Navbar() {

  const [showMenu,setshowMenu] = useState(false)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
      <nav className="navbar">
      <div className="logo" onClick={scrollTop}>
        Anjali P
      </div>
      <div className="desktopMenu">
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
      <Link activeClass="active" to="work" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Experience</Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
      </div>

      <img src={menu} alt="Menu" className='MobMenu' onClick={()=>setshowMenu(!showMenu)}/>
      <div className="navMenu" style={{display:showMenu? 'flex' : 'none'}}>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Skills</Link>
      <Link activeClass="active" to="work" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Experience</Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Projects</Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Contact</Link>
      </div>
      </nav>
  )
}

export default Navbar
