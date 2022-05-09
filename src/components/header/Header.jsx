import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me5.png'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5 className='h51'>Hello I'm</h5>
      <h1 className='h11'>Ji Hoon Park</h1>
      <h4 className='h41'>Also known as</h4>
      <h2 className='h21'>Jason</h2>
      <h5 className="text-light1">-- Fullstack Developer --</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
            <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
    </div>
    </header>
  )
}

export default Header