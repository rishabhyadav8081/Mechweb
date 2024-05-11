import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
function Navbar() {
  const [stiky,setstiky]= useState(false);
useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setstiky(true):setstiky(false)
    })
},[])

  return (
    <nav className={`container ${stiky? 'dark':''}`}>
    <img src={logo} className='logo'/>
    <ul> 
        <li> <Link to='hero' smooth={true} offset= {0} duration={500} >Home</Link></li>
        <li><Link to='about' smooth={true} offset= {-130} duration={500} >About</Link></li>
        <li><Link to='program' smooth={true} offset= {-260} duration={500} >Programs</Link></li>
        <li><Link to='campus' smooth={true} offset= {-260} duration={500} >Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset= {-260} duration={500} >Testimonial
        </Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset= {-260} duration={500} >Contact-Us</Link> </button></li>
    </ul>
    </nav>
  )
}

export default Navbar
