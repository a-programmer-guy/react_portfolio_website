import React from 'react'
import MockResume from '../../assets/MockResume.txt'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={MockResume} download='KaylanResume' className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA