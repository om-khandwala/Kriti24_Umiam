import React, { useState } from 'react';
import './usercomment.css';

const CommentBox = ({ onCancel, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(comment);
    setComment('');
  };

  const handleCancel = () => {
    onCancel();
    setComment('');
  };

  return (
    <div className="comment-box">
      <textarea
        placeholder="Type your comment here..."
        value={comment}
        onChange={handleChange}
        className="comment-input"
      />
      <div className="button-container">
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button className="submit-button" onClick={handleSubmit}>Comment</button>
      </div>
    </div>
  );
};

export default CommentBox;
