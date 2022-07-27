import React from 'react'
import './about.css'
import ME from '../../assets/fb.jpg'
import {FaAward} from 'react-icons/fa'
import {BsFolderCheck} from 'react-icons/bs'
import {ImOffice} from 'react-icons/im'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="about image" />
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>6 month's internship</small>
          </article>

          <article className='about__card'>
            <ImOffice className='about__icons'/>
            <h5>Workspace</h5>
            <small>Cybrom institute Bhopal</small>
          </article>

          <article className='about__card'>
            <BsFolderCheck className='about__icons'/>
            <h5>Projects</h5>
            <small>10+ completed</small>
          </article>

        </div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About