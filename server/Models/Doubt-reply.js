import mongoose from 'mongoose';

const doubtReplySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doubt_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doubt',
        required: true
    },
    text_body: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const DoubtReply = mongoose.model('DoubtReply', doubtReplySchema);

export default DoubtReply;
