import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menuu from '../../assets/menu-icon.png'
import {Link} from 'react-scroll'
function Navbar() {
  const [stiky,setstiky]= useState(false);
useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setstiky(true):setstiky(false)
    })
},[])
  const [menu,setmenu]= useState(false);
  const toggle = ()=>{
      menu ? setmenu(false):setmenu(true)
  }

   useEffect(()=>{
    document.addEventListener("mousedown",()=>{
      setmenu(false)
    })
   })

  return (
    <nav className={`container ${stiky? 'dark':''}`}>
    <img src={logo} className='logo'/>
    <ul className={menu? '':"hide"}> 
        <li> <Link to='hero' smooth={true} offset= {0} duration={500} >Home</Link></li>
        <li><Link to='about' smooth={true} offset= {-130} duration={500} >About</Link></li>
        <li><Link to='program' smooth={true} offset= {-260} duration={500} >Programs</Link></li>
        <li><Link to='campus' smooth={true} offset= {-260} duration={500} >Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset= {-260} duration={500} >Testimonial
        </Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset= {-260} duration={500} >Contact-Us</Link> </button></li>
    </ul>
    <img src={menuu} className='menu' onClick={toggle}/>
    </nav>
  )
}

export default Navbar
