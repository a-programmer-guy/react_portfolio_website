import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/react.jpeg'
import Image2 from '../../assets/pyflask.png'
import Image3 from '../../assets/nodejs.png'
import Image4 from '../../assets/selenium.png'
import Image5 from '../../assets/testng.png'
import Image6 from '../../assets/cucumber.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image1} alt='react'></img>
          </div>
          <h3>Responsive React Registration Form</h3>
          <a className='btn'
          href='https://github.com/a-programmer-guy/react-login-with-authentication'>
            Github
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image2} alt='react'></img>
          </div>
          <h3>Application with Python/Flask Back-End and React Front-End</h3>
          <a className='btn'
          href='https://github.com/a-programmer-guy/flask_react_app'>
            Github
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image3} alt='react'></img>
          </div>
          <h3>Node JS Task Manager Back-End</h3>
          <a className='btn'
            href='https://github.com/a-programmer-guy/nodejs_tutorial'>
            Github
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image4} alt='react' className='portfolio_image'></img>
          </div>
          <h3>Selenium - Cucumber Framework With Java</h3>
          <a className='btn'
          href='https://github.com/a-programmer-guy/cucumber_java'>
            Github
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image5} alt='react'></img>
          </div>
          <h3>Selenium - TestNG Framework With Java</h3>
          <a className='btn'
          href='https://github.com/a-programmer-guy/selenium_testng'>
            Github
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image6} alt='react' className='portfolio_image'></img>
          </div>
          <h3>Java with Spring Boot Back-end</h3>
          <a className='btn'
          href='https://github.com/a-programmer-guy/spring_boot_tutorial'>
            Github
          </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio