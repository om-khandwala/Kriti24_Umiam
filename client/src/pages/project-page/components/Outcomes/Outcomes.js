import React from 'react'
import './style.css'
function Outcomes({project}) {
  return (
    <div className='Outta'>
      <p className='descp5'>Outcomes</p>
        <div className="boxing5">
          {project.outcomes}
        </div>
    </div>
  )
}

export default  Outcomes
