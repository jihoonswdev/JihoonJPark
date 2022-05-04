import React from 'react'
import './portfolio.css'
import project1 from '../../assets/portfolio-1.jpg'

const data = [
  {
    id:1,
    image: project1,
    title: 'Travel Support',
    github: 'https://github.com/ccardinale98/travel-support',
    demo: 'https://ccardinale98.github.io/travel-support/'
  },
  {
    id:2,
    image: project1,
    title: 'Travel Support',
    github: 'https://github.com/ccardinale98/travel-support',
    demo: 'https://ccardinale98.github.io/travel-support/'
  },
  {
    id:3,
    image: project1,
    title: 'Travel Support',
    github: 'https://github.com/ccardinale98/travel-support',
    demo: 'https://ccardinale98.github.io/travel-support/'
  },
  {
    id:4,
    image: project1,
    title: 'Travel Support',
    github: 'https://github.com/ccardinale98/travel-support',
    demo: 'https://ccardinale98.github.io/travel-support/'
  },
  {
    id:5,
    image: project1,
    title: 'Travel Support',
    github: 'https://github.com/ccardinale98/travel-support',
    demo: 'https://ccardinale98.github.io/travel-support/'
  },
  {
    id:6,
    image: project1,
    title: 'Travel Support',
    github: 'https://github.com/ccardinale98/travel-support',
    demo: 'https://ccardinale98.github.io/travel-support/'
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src= {image} alt= {title} />
          </div>
            <h3> {title}</h3>
            <div className="portfolio__item-cta">
              <a href= {github} className='btns' target='__blank'>Github</a>
              <a href= {demo} className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }


        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
              <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
              <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
              <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
              <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
              <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ccardinale98/travel-support" className='btns' target='__blank'>Github</a>
              <a href="https://ccardinale98.github.io/travel-support/" className='btn btn-primary' target='__blank'>Live Demo</a>
            </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio