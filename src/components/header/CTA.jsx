import React from 'react'
import CV from '../../assets/Ji Hoon Park Resume.pdf'
// import ME from '../../assets/Me2.png'

function CTA() {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        
    </div>
    
  )
}

export default CTA