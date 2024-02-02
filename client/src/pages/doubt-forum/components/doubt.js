import React, { useState, useEffect } from 'react';
import DoubtAnswer from './answer';
import { getRepliesOfDoubt } from '../../../api/doubt';
import './doubt.css';
import ReplyForm from './reply';

function Doubt({ doubt }) {
    console.log(document.cookie);

    const [replies, setReplies] = useState([]);
    const [showAllReplies, setShowAllReplies] = useState(false);

    useEffect(() => {
        const fetchReplies = async () => {
            try {
                const fetchedReplies = await getRepliesOfDoubt(doubt._id);
                setReplies(fetchedReplies);
            } catch (error) {
                console.error('Error fetching replies:', error);
            }
        };

        fetchReplies();
    }, [doubt._id]);

    const time = Date.now() - new Date(doubt.created_at).getTime();

    const toggleReplies = () => {
        setShowAllReplies(!showAllReplies);
    };

    return (
        <div className='doubt'>
            <h2>{doubt.title}</h2>
            <div className='tags'>
                {doubt.tags.map((tag,index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>
            <p className='description'>{doubt.description}</p>
            <p>Asked by <span className='bold'>{doubt.author}</span>, <span className='bold'>{(time /(1000*60)).toFixed(0) }</span> minutes ago</p>
            <hr />
            <ReplyForm doubtId={doubt._id}/>
            
            {replies.length > 0 && (
                <>
                <div className='footer space-between'>
                    <div onClick={toggleReplies} className='flex'>
                        <i class="fa-regular fa-comments"></i>
                        <p>Answer</p>
                    </div>
                    <div className='flex'>
                        <i class="fa-solid fa-share"></i>
                        <p>Share</p>
                    </div>
                </div>
                    {showAllReplies && <DoubtAnswer replies={replies} />}
                </>
            )}
           
        </div>
    );
}

export default Doubt;
