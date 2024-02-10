import React, { useEffect, useState } from 'react'
import './style.css'
import { currentUser } from '../../../../api/course';
import { addCommentById, getProjectById } from '../../../../api/project';
function Comments({project}) {
  const[value, setValue] = useState("");
  const[name, setName] = useState("")
  const[com, setCom] = useState(project.comments);
  useEffect(()=>{
    const get = async() =>{
      const response = await currentUser();
      console.log(response.user[0].name);
      setName(response.user[0].name);
    }
    get();
  },[])
  async function handleComment(){
    const data = {
      username: name,
      comment: value
    }
    await addCommentById(project._id, data);
    alert("comment added")
    const ap = await getProjectById(project._id);
    setCom(ap.comments);
  }
  return (
    <div className='comments'>
      <p className='descp2'>Comments</p>
        <div className='create-comment'>
          <input type='text' placeholder='Enter comment' onChange={(e)=>{setValue(e.target.value)}} />
          <button onClick={handleComment}>Comment</button>
        </div>
        <div className="boxing2">
          {com.map((comment, index) => (
            <div className='comment' key={index}>
              <h4>{comment.username.toLowerCase()}</h4>
              <p>{comment.comment.toLowerCase()}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Comments
