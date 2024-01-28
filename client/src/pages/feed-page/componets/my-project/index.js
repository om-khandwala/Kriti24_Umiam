import React from 'react'
import './style.css'
function MyProject() {
  return (
    <div className='myproject-container'>
      <div className="heading">
        <h3>Your Project</h3>
        <button>New</button>
      </div>
      <input type="text"/>
      <div className='project'>
        <img src="/images/js_logo.png" alt="Logo" />
        <p>Modern Javascript</p>
      </div>
    </div>
  )
}

export default MyProject
