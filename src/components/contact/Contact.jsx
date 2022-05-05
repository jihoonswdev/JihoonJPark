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
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>jihoonswdev@gmail.com</h5> */}
            <a href="mailto:jihoonswdev@gmail.com" target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            {/* <h5>email@gmail.com</h5> */}
            <a href="https://m.me/gentlegiant312" target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            {/* <h5>+15512656088</h5> */}
            <a href="https://api.whatsapp.com/send?phone=5512656088" target='__blank'>Send a Message</a>
          </article>

        </div>
        {/* End of Contact Options */}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btns btn-primary' required>Submit Message</button>
          {/* <div className= "row"> {result ? <Result /> : null}</div> */}
        </form>
      </div>
    </section>
  )
}

export default Contact