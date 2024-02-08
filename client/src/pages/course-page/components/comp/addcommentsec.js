import React, { useState } from 'react';
import './addcommentsec.css'; 
import CommentBox from'./usercomment'

const CommentSection = () => {

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

    const comments = [
            { comment: 'My new website bhjc esdcs he w fb  wb b b b rbrbesuyw bce w cb ywbvbr rbchsbkaopeejbcjschususrkadabbc sjchsv bsrbkjsebfhahabfjebvkssjbsj', user: 'Xyz', image: './images/Ellipse 23.png', id: 1 },
            { comment: 'Welcome party!', user: 'Xyz', image: './images/Ellipse 23.png', id: 2 },
            { comment: 'Web dev top tips', user: 'xyz', image: './images/Ellipse 23.png', id: 3 }
        ]
    

    return ( 
        <div className="sec_of_comment">
            {showCommentBox ? (
                <CommentBox onCancel={handleCommentCancel} onSubmit={handleCommentSubmit}/>
            ) : (
                <button className='add_comment' onClick={toggleCommentBox}>+ Add Comment</button>
            )}

            {
                comments.map((comment) => (
                    <div className="comment-preview" key={comment.id}>
                        <img src={comment.image} alt="Comment" className='img_in_comment' ></img>
                        <div>
                            <p className='comment_user'>{comment.user}</p>
                            <p className='user_comment'>{comment.comment}</p>
                        </div>
                    </div>
                ))
            }
 
        </div>
     );
}
 
export default CommentSection;