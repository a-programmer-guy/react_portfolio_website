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
              <div><h4>JavaScript</h4></div>
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
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>And ReactStrap</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Selenium</h4>
                <small className='text-light'>With TestNG and Cucumber</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>With Spring Boot</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>With Flask</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>NodeJS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>PHP</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>PostgreSQL, MySQL, SQAlchemy</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>NoSQL</h4>
                <small className='text-light'>MongoDB</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <h4>Swagger UI</h4>
            </article>
          </div>

        </div>
          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
      </div>
    </section>
  )
}

export default Experience