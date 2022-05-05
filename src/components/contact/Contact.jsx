import React, {useState, useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Result =() => {
  return(
      <p id="context">Your message has been successfully sent. You will be contacted back within 24 hours. Thank you.</p>
  );
};


function Contact() {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o5gmo19', 'template_xr8cmpa', form.current, 'user_WVXs18kFXvhgVVUqnajdT')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
  showResult(true);
  };

 //  Hide Result
 setTimeout(() =>{
  showResult(false)
}, 5000);

  return (
    <section id='contact'>
      <h5 className='h5'>Get in Touch</h5>
      <h2 className='h2'>Connect with Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4 className='h4'>Email</h4>
            {/* <h5>jihoonswdev@gmail.com</h5> */}
            <a href="mailto:jihoonswdev@gmail.com" className='word' target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
            <h4 className='h4'>Messenger</h4>
            {/* <h5>email@gmail.com</h5> */}
            <a href="https://m.me/gentlegiant312" className='word' target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4 className='h4'>WhatsApp</h4>
            {/* <h5>+15512656088</h5> */}
            <a href="https://api.whatsapp.com/send?phone=5512656088" className='word' target='__blank'>Send a Message</a>
          </article>

        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' className='fontsize' placeholder='Your Full Name' required />
          <input type="email" name='email' className='fontsize' placeholder='Your Email' required />
          <textarea name="message" rows="7" className='message' placeholder='Your Message' required ></textarea>
          <button type='submit' className='contactbtns btn-primary' required>Submit Message</button>
          <div className= "row"> {result ? <Result /> : null}</div>
        </form>
      </div>
    </section>
  )
}

export default Contact