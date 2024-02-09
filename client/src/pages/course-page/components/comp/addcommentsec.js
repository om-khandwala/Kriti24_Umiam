import React, { useEffect, useState } from 'react';
import './addcommentsec.css'; 
import CommentBox from'./usercomment'
import { comments } from './CourseList';
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
                <button className='add_comment' onClick={toggleCommentBox}>+ Add Comment</button>
            )}

            {   
                
                comments.length==0 ? <div>No comments available</div> : comments.map((comment) => (
                    <div className="comment-preview" key={comment._id}>
                        <img src={comment.image} alt="Comment" className='img_in_comment' ></img>
                        <div>
                            <p className='comment_user'>{comment.user_id}</p>
                            <p className='user_comment'>{comment.text_body}</p>
                        </div>
                    </div>
                ))
            }
 
        </div>
     );
}
 
export default CommentSection;