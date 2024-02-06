import mongoose from 'mongoose';

const courseFeedbackSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
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

const CourseFeedback = mongoose.model('CourseFeedback', courseFeedbackSchema);

export default CourseFeedback;
