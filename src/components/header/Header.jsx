import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me15.png'
import Headersocial from './Headersocial'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Amit Chourasiya</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <Headersocial />

        <div className='me'>
          <img src={ME} alt='' width='200px' height='250' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header