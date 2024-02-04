import React from 'react'

import "./style.css";
function MiddleSection() {
  return (
    <div className='container'>
      <div className="first">
        <h4>React Master</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nesciunt harum odio voluptatum dolore ad recusandae ipsam minus assumenda fugit ea, magni debitis deserunt. Blanditiis voluptatem quisquam natus voluptatum sequi.</p>
        <div className="lang">
          <p>html</p>
          <p>css</p>
          <p>js</p>
        </div>
        <hr />
        <div className="foot">
          <div className="left_foot">
            <div className="enter">
                <img src="logo.png" alt="Logo" />
                <h4>Enter Description</h4>
            </div>
            <div className="Join">
                <img src="logo.png" alt="Logo" />
                <h4>Join</h4>
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
