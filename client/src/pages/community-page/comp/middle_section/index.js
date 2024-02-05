import React from 'react'
import {Link}  from 'react-router-dom'

import "./style.css";
function MiddleSection({groups}) {
  console.log(groups)
  return (
    <div className='container'>
      <div className="first">
        <h4>{groups[0].name}</h4>
        <p>{groups[0].description}</p>
        <div className="lang">
          {groups[0].tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>

        <hr />
        <div className="foot">
          <div className="left_foot">
            <div className="enter">
                <img src="logo.png" alt="Logo" />
                <Link to={`./${groups[0]._id}`}>
                  <button>Enter Descussin</button>
                </Link>
            </div>
            <div className="Join">
                <img src="logo.png" alt="Logo" />
                <Link to={`./${groups[0]._id}`}>
                  <button>Join</button>
                </Link>
            </div>
          </div>
          <div className="right_foot">
                <img src="logo.png" alt="Logo" />
                <h4>Share</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
