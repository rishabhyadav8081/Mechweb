import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'
function Hero() {
  return (
    <div className='hero container'>
      <div className="herotext">
        <h1>We ensure better education for a better world</h1>
        <p>At Edusity , we believe in fostering an environment where academic excellence, personal growth, and community engagement intersect to shape the leaders of tomorrow. Established in 1850, Acadia has a rich history of providing transformative education and empowering students to reach their full potential.
       </p>
       <button className='btn'> <Link to='campus' smooth={true} offset= {-260} duration={500}>Explore more</Link>  <img src={arrow} /></button>
      </div>
    </div>
  )
}

export default Hero
