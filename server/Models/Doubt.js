import mongoose from 'mongoose';

const doubtSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    text: {
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
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Doubt = mongoose.model('Doubt', doubtSchema);

export default Doubt;
