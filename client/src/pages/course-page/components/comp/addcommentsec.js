import React, { useEffect, useState } from 'react';
import './addcommentsec.css'; 
import CommentBox from'./usercomment'
import TotalFeedbacks from './TotalFeedbacks';
const CommentSection = ({comments, course, setComments}) => {
    const [showCommentBox, setShowCommentBox] = useState(false);

    const toggleCommentBox = () => {
        setShowCommentBox(!showCommentBox);
    };

    const handleCommentSubmit = (comment) => {
        console.log('Comment submitted:', comment);
        toggleCommentBox();
    };

    const handleCommentCancel = () => {
        toggleCommentBox(); 
    };

    
    return ( 
        <div className="sec_of_comment">
            {showCommentBox ? (
                <CommentBox course = {course} setComments = { setComments} onCancel={handleCommentCancel} onSubmit={handleCommentSubmit}/>
            ) : (
                <button className='add_comment' onClick={toggleCommentBox}>+ Add Feedback</button>
            )}

            {   

                comments.length==0 ? <div>No feedbacks available</div> : comments.map((comment) => (
                    <TotalFeedbacks key={comment._id} comment = {comment} />
                ))
            }
 
        </div>
     );
}
 
export default CommentSection;