import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BiMessageAltDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#home"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiCustomerService2Fill/></a>
      <a href="#contact"><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav