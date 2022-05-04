import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me!</h2>

      <div className="container contact__container">
        <div className="container__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h4>jihoonswdev@gmail.com</h4>
            <a href="mailto:email@gmail.com" target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine/>
            <h4>Messenger</h4>
            <h4>email@gmail.com</h4>
            <a href="https://m.me/gentlegiant312" target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h3>+15512656088</h3>
            <a href="https://api.whatsapp.com/send?phone=5512656088"target='__blank'>Send a Message</a>
          </article>

        </div>
        {/* End of Contact Options */}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btns btn-primary' required>Submit Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact