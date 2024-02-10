import React from 'react'
import './style.css'
function Description({project}) {
  return (
    <div className='Describe'>
      <p className='descp3'>Description</p>
        <div className="boxing3">
          {project.description}
        </div>
    </div>
  )
}

export default Description
