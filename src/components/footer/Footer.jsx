import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>AMIT CHOURASIYA</a>

        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#service'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__social'>
          <a href='https://facebook.com'><AiOutlineFacebook/></a>
          <a href='https://instagram.com'><BsInstagram/></a>
          <a href='https://twitter.com'><FaTwitterSquare/></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; AMIT CHOURASIYA.All right reserved.</small>
        </div>

      

    </footer>
  )
}

export default Footer