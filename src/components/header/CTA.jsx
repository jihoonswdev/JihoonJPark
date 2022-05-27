import React from 'react'
import CV from '../../assets/JasonJiHoonParkResume.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn' target='__blank'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>

  )
}

export default CTA