import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bms.png'
import IMG2 from '../../assets/bms2.png'
import IMG3 from '../../assets/bms3.png'
import IMG4 from '../../assets/civil.png'
import IMG5 from '../../assets/civil1.png'
import IMG6 from '../../assets/civil3.png'

const data =[
  {
    id:1,
    image: IMG1,
    title:'clone of book my show website',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18684964-clone-of-bookmyshow-website'
  },
  {
    id:2,
    image: IMG2,
    title:'clone of book my show website',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18684992-clone-of-bookmyshow-website'
  },
  {
    id:3,
    image: IMG3,
    title:'clone of book my show website',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18684919-clone-of-bookmyshow?added_first_shot=true'
  },
  {
    id:4,
    image: IMG4,
    title:'clone of book my show website',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18685012-construction-website-demo'
  },
  {
    id:5,
    image: IMG5,
    title:'clone of book my show website',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18685036-demo-of-construction-website'
  },
  {
    id:6,
    image: IMG6,
    title:'clone of book my show website',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18685036-demo-of-construction-website'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
            <img src={ image } alt={title}/>
            </div>
            <h3>{title}</h3>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>
          )
        })
       }
      
      </div>
    </section>
  )
}

export default Portfolio