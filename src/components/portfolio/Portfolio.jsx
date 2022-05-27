import React from 'react'
import './portfolio.css'
import project1 from '../../assets/portfolio-1.jpg'
import project2 from '../../assets/portfolio-2.png'
import project3 from '../../assets/portfolio-3.jpg'
import project4 from '../../assets/portfolio-4.jpg'
import project5 from '../../assets/portfolio-5-6.jpg'
import project6 from '../../assets/portfolio-5-6.jpg'

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
    image: project2,
    title: 'Project Bid Board',
    github: 'https://github.com/ccardinale98/project-bid-board',
    demo: 'https://project-bid-board.herokuapp.com/'
  },
  {
    id:3,
    image: project3,
    title: 'Electronic Store',
    github: 'https://github.com/ccardinale98/electronics-store',
    demo: 'https://electronics-storep3.herokuapp.com/'
  },
  {
    id:4,
    image: project4,
    title: 'E-Commerce Backend',
    github: 'https://github.com/jihoonswdev/E-Commerce-BackEnd',
    demo: 'https://watch.screencastify.com/v/4jSBfHNbUxrNqrMva61o'
  },
  {
    id:5,
    image: project5,
    title: 'Coming Soon!',
    github: 'https://github.com/jihoonswdev',
    demo: 'https://github.com/jihoonswdev'
  },
  {
    id:6,
    image: project6,
    title: 'Coming soon!',
    github: 'https://github.com/jihoonswdev',
    demo: 'https://github.com/jihoonswdev'
  },
  // {
  //   id:7,
  //   image: project1,
  //   title: 'Travel Support',
  //   github: 'https://github.com/ccardinale98/travel-support',
  //   demo: 'https://ccardinale98.github.io/travel-support/'
  // },
  // {
  //   id:8,
  //   image: project1,
  //   title: 'Travel Support',
  //   github: 'https://github.com/ccardinale98/travel-support',
  //   demo: 'https://ccardinale98.github.io/travel-support/'
  // }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='h5'>My Recent Work</h5>
      <h2 className='h2'>Portfolio</h2>

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
              <a href= {github} className='portfoliobtns' target='__blank'>Github</a>
              <a href= {demo} className='portfoliobtn btn-primary' target='__blank'>Live Demo</a>
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