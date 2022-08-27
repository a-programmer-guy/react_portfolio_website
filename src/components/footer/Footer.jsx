import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Kaylan Horne</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/kaylan-horne-373999182'><BsLinkedin /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Kaylan Horne - Ctrl-Kay. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer