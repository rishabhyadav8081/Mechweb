import React from 'react'
import './title.css'
function Title({subtitle,Title}) {
  return (
    <div>
      <div className="title">
        <p>{subtitle}</p>
        <h2>{Title} </h2>
      </div>
    </div>
  )
}

export default Title
