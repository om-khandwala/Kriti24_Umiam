import React from "react";
import Language from "../../../../componets/language";
import "./style.css";

function Feed() {
  return (
    <div className="feed-container">
      <div className="heading">
        <div className="flex">
        <img src="/images/js_logo.png" alt="Logo" />
          <h3>Beyond Javascript</h3>
        </div>
        <div className="flex">
          <Language name={"Java"} />
          <Language name={"Html"} />
        </div>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus repudiandae deserunt nobis!
          Necessitatibus repudiandae deserunt nobis!
        </p>
      </div>
      <div className="body-image">
        <img src="https://media.licdn.com/dms/image/D5612AQFlxMRpK-On8g/article-cover_image-shrink_720_1280/0/1670602482212?e=2147483647&v=beta&t=1HWOX81_1_mfqzP2kdHty9dnCVgb-dmVsMuYhBKCnRQ" alt="body-image" />
      </div>
      <div className="footer">
        <div className="like">
          <img src="https://example.com/like-logo.png" alt="Like Logo" />
          <p>Like</p>
        </div>
        <div className="comment">
          <img src="https://example.com/comment-logo.png" alt="Comment Logo" />
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
