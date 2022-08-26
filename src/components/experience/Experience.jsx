import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FaLanguage } from 'react-icons/fa'
import { GiWoodFrame } from 'react-icons/gi'
import { BiData } from 'react-icons/bi'
import { BsTools } from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h2 id='experience_h2'>My Experience</h2>
      <h5 id='years'>2 Years Working in Web Development</h5>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>React</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>Bootstrap</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>Selenium</h4>
            </article>
            </div>
          </div>
          <div className='experience__backend'>


          </div>
          < div className='experience__btn'>
            <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
          </div>
      </div>
    </section>
  )
}

export default Experience