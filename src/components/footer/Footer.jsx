import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#footerroot" className='footer__logo'>Jason Park</a>

      <ul className='permalinks'>
      <li><a href="#root">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='__blank'><FaFacebookF/></a>
        <a href="https://instagram.com" target='__blank'><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jason Park. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer