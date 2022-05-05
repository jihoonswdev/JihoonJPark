import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {AiOutlineApi} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {FaGit} from 'react-icons/fa'
import {SiHeroku} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='h5'>What Skills I have</h5>
      <h2 className='h2'>My Experiences</h2>

                                    {/* FrontEnd */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className='h3'>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon'/>
              <div>
                <h4 className='h4'>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon'/>
              <div>
                <h4 className='h4'>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/> 
              <div>
                <h4 className='h4'>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineApi className='experience__details-icon'/>
              <div>
                <h4 className='h4'>APIs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4 className='h4'>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4 className='h4'>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

                                    {/* Backend */}
        <div className="experience__backend">
        <h3 className='h3'>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4 className='h4'>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <div>
                <h4 className='h4'>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4 className='h4'>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

                                    {/* Database */}
        <div className="experience__database">
        <h3 className='h3'>Database & More</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4 className='h4'>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsGithub className='experience__details-icon'/>
              <div>
                <h4 className='h4'>Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaGit className='experience__details-icon'/>
              <div>
                <h4 className='h4'>Git</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiHeroku className='experience__details-icon'/>
              <div>
                <h4 className='h4'>Heroku</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience