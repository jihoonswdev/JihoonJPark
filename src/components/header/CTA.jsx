import React from 'react'
import CV from '../../assets/Ji Hoon Park Resume.pdf'
import ME from '../../assets/Me1.png'

function CTA() {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        <div className="me">
            <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
    
  )
}

export default CTA