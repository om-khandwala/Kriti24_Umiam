import React from 'react'
import './style.css'
function Media({project}) {
  return (
    <div className='media1'>
      <p className='descp4'>Media</p>
      <div className="boxing4">
        {project.links.image.map((image, index) => (
          <img key={index} src={image} alt={index} />
        ))}
      </div>
    </div>
  )
}

export default Media
