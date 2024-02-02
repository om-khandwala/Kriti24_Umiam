import { replyDoubt } from '../../../api/doubt';
import './reply.css';
import React, { useState } from 'react';

function ReplyForm({ doubtId }) {
    const [replyText, setReplyText] = useState('');

    const handleChange = (event) => {
        setReplyText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try {
            const data = { text_body: replyText, user_id: '61495c8a3a5e8b25a74bed8f' };
            const reply = await replyDoubt(doubtId, data);
            
            console.log('Reply added:', reply);
            setReplyText('');
        } catch (error) {
            console.error('Error adding reply:', error);
        }
    };

    return (
        <form className='reply-form' onSubmit={handleSubmit}>
            <textarea
                value={replyText}
                onChange={handleChange}
                placeholder="Type your reply here..."
            />
            <button type="submit">Reply</button>
        </form>
    );
}

export default ReplyForm;
