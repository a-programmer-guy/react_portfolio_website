import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { RiEmotionHappyLine } from 'react-icons/ri'

import ME from '../../assets/me5.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' className='about_img' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
              <RiEmotionHappyLine className='about__icon'/>
              <h4>Introduction</h4>
              <small>
                I am an enthusiastic and self-motivated IT professional; that is always excited to continue developing my skills.
                From writing code for an API to repairing computers, there is always something unexpected to encounter, and I enjoy researching along with problem-solving.  
                In my personal life or at work, I always strive to make interactions positive.
                I'm a skilled leader with proven ability to motivate, educate and manage groups while effectively accomplishing tasks.
                I appreciate working with others on a team or individually - whatever the project requires to achieve success.
                </small>
            </article>
            <article className='experience__card'>
              <FaAward className='experience__icon' />
              <h4>Work History</h4>
              <small>2 Years Working in Web Development</small>
            </article>
          </div>
          <a href='#contact' className='btn btn-primary' id='talk_btn'>Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default About