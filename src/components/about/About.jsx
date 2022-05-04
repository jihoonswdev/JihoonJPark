import React from 'react'
import './about.css'
import ME from '../../assets/about-me12.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Img'/>
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1 Year</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>1 </small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>5 Completed Projects</small>
              </article>

            </div>

            <p>
            I'm a passionate & hard-working full-stack developer that is always ready to learn new technologies.<br></br>
            I have recently graduated from Rutger's New Brunswick Bootcamp in NJ.<br></br>
            I love learning about new informations and contribute my expertise to grow as a developer.<br></br>
            </p>

            <a href="#contact" className="btns btn-primary">Let's Talk!</a>

          </div>
        </div>
    </section>
  )
}

export default About