import React from 'react'
import './contact.css'
import {GoMail} from 'react-icons/go'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v6hxdrp', 'template_n68m7m3', form.current, 'HQBCHc8UdBuPFXzhf')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <GoMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>amitcho777@gmail.com</h5>
            <a href='mailto:amitcho777@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Amit Chourasiya</h5>
            <a href='https://m.me/amit.chourasiya.58'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>What's App</h4>
            <h5>+918962224195</h5>
            <a href='https://api.whatsapp.com/send?phone+918962224195'>Send a message</a>
          </article>

        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email'/>
          <textarea name='message' rows='7' placeholder='your message'/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact