import React from 'react'
import './about.css'
import about from '../../assets/about.png'

function About() {
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src={about} className='about' />
        </div>
        <div className="about-right">
            <h3>About Univercity</h3>
            <h2>Nurturing tomorrow leaders today</h2>
            <p>Our faculty, comprised of distinguished scholars and industry leaders, spearhead a diverse range of academic programs spanning arts, humanities, sciences, engineering, medicine, and beyond. With a focus on interdisciplinary collaboration and experiential learning, Veritas equips students with the knowledge, skills, and critical thinking abilities necessary to thrive in a complex and interconnected world.
             <p>As a socially responsible institution, Veritas is deeply committed to fostering a culture of service, diversity, and inclusion both on and off campus. Through community-based learning initiatives, volunteer programs, and partnerships with local organizations, our students actively contribute to addressing societal needs and promoting social justice. </p>Guided by principles of ethical leadership and civic responsibility, Veritas cultivates engaged citizens who are empowered to effect positive change in their communities and beyond.
         </p>
        </div>
      </div>
    </div>
    
  )
}

export default About
