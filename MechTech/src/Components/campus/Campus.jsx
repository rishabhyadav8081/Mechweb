import React from 'react'
import './campus.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import whitearrow from '../../assets/white-arrow.png'
import { Link } from 'react-scroll'

function Campus() {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn dark-btn'><Link to='contact' smooth={true} offset= {-260} duration={500}>see more here</Link> <img src={whitearrow} alt="" /></button>
    </div>
  )
}

export default Campus
