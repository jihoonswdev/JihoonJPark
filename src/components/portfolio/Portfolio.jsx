import React from 'react'
import './portfolio.css'
import project1 from '../../assets/portfolio-1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
            <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
            <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
            <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
            <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
            <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
            <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio