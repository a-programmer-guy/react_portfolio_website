import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kaylan.horne3@gmail.com</h5>
            <a href='mailto:kaylan.horne3@gmail.com'>Send Me An Email</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Kaylan Horne</h5>
            <a href='https://www.linkedin.com/in/kaylan-horne-373999182'>Send Me A Message on LinkedIn</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a href={process.env.REACT_APP_WHATSAPP}>Send Me A Message On Whatsapp</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact