import mongoose from 'mongoose';

const doubtSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tags: {
        type: [String],
        default: []
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Doubt = mongoose.model('Doubt', doubtSchema);

export default Doubt;
