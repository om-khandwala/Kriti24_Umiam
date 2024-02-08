import React, { useEffect, useState } from 'react';
import './usercomment.css';
import { allFeedbacks, createFeedback, currentUser } from '../../../../api/course';

const CommentBox = ({ course, setComments, onCancel, onSubmit }) => {
  const [comment, setComment] = useState('');
  const [user, setUser] = useState({});
  useEffect(()=>{
    const get = async() => {
      const response = await currentUser();
      setUser(response.user[0]);
    }
    get();
  },[])
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async() => {
    const data = {
      user_id: user._id,
      text_body: comment
    }
    await createFeedback(course._id, data)
    const fetchedComments = await allFeedbacks(course._id);
    setComments(fetchedComments.feedbacks);
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
