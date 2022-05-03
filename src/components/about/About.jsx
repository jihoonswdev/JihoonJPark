import React from 'react'
import './about.css'
import ME from '../../assets/About-Me1.png'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
            <div className="about__cards">

              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1 Year</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1 Year</small>
              </article>
              
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1 Year</small>
              </article>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About