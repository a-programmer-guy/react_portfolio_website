import React from 'react'
import Resume from '../../assets/Resume_Kaylan_Horne.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download='KaylanResume' className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA