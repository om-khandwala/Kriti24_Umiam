import React, { useEffect } from 'react'
import './style.css'
function Comments({project}) {
  useEffect(()=>{
    
  })
  return (
    <div className='comments'>
      <p className='descp2'>Comments</p>
        <div className='create-comment'>
          <input type='text' placeholder='Enter comment'/>
          <button>Comment</button>
        </div>
        <div className="boxing2">
          {project.comments.map((comment, index) => (
            <div className='comment' key={index}>
              <h4>{comment.username}</h4>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Comments
