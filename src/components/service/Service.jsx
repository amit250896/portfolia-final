import React from 'react'
import './service.css'
import {BiCheckDouble} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
        <div className='container service__container'>
          <article className='service'>
            <div className='service__head'>
                <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
            </ul>
          </article>
          {/* end of ui */}
          <article className='service'>
          <div className='service__head'>
                <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
            </ul>
          </article>

          {/* end of wed development */}
          <article className='service'>
          <div className='service__head'>
                <h3>Content Creation</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>dagdihgvdgvdhvha</p>
              </li>
            </ul>
          </article>

        </div>

    </section>
  )
}

export default Service