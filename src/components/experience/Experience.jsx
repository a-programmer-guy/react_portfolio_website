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
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container __container'>
        <div className='experience__content'>
          <div className='experience__cards'>
            <article className='experience__card'>
              <FaLanguage className='experience__icon' />
              <h3>Languages</h3>
              <small>
                <p><BsPatchCheckFill className='check_light'/> JavaScript</p>
                <p><BsPatchCheckFill /> Java</p>
                <p><BsPatchCheckFill /> Python</p>
                <p><BsPatchCheckFill /> PHP</p>
                <p><BsPatchCheckFill /> HTML </p>
                <p><BsPatchCheckFill /> CSS</p>
              </small>
            </article>
            <article className='experience__card'>
              <GiWoodFrame className='experience__icon' />
              <h3>Frameworks</h3>
              <small>
                <p><BsPatchCheckFill /> MERN</p>
                <p><BsPatchCheckFill /> LAMP</p>
                <p><BsPatchCheckFill /> NodeJS</p>
                <p><BsPatchCheckFill /> Flask</p>
                <p><BsPatchCheckFill /> React </p>
                <p><BsPatchCheckFill /> JUnit</p>
                <p><BsPatchCheckFill /> TestNG</p>
                <p><BsPatchCheckFill /> Swagger UI</p>
              </small>
            </article>
            <article className='experience__card'>
              <BiData className='experience__icon' />
              <h3>Databases</h3>
              <small>
                <p><BsPatchCheckFill /> PostgreSQL</p>
                <p><BsPatchCheckFill /> MongoDB</p>
                <p><BsPatchCheckFill /> MySQL</p>
                <p><BsPatchCheckFill /> SQLAlchemy</p>
                <p><BsPatchCheckFill /> NoSQL </p>
              </small>
            </article>
            <article className='experience__card'>
              <BsTools className='experience__icon' />
              <h3>Tools</h3>
              <small>
                <p><BsPatchCheckFill /> Selenium </p>
                <p><BsPatchCheckFill /> Git</p>
                <p><BsPatchCheckFill /> AWS </p>
                <p><BsPatchCheckFill /> jQuery</p>
                <p><BsPatchCheckFill /> Filezilla </p>
                <p><BsPatchCheckFill /> Wireshark</p>
              </small>
            </article>
          </div>
          < div className='experience__btn'>
            <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience