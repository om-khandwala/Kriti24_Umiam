import Course from "../../Models/Course.js";
import CourseFeedback from "../../Models/Course-feedback.js";

export const createCourse = async (req, res) => {
    try{
        const parsedCourse = req.body;
        const course = new Course(parsedCourse);
        await course.save();
        res.status(201).json({ message: 'Course created successfully', course });
    } catch (error) {
        console.log("There is some error in courses controller", error);
        res.status(500).json({ error: 'Internal server error occurred' });
    }
};

export const createCourseFeedback = async (req, res) => {
    try {
        const { course_id } = req.params;
        const { user_id, text_body } = req.body;

        const feedbackData = {
            user_id,
            text_body,
            course_id
        };

        const feedback = new CourseFeedback(feedbackData);
        await feedback.save();
        res.status(201).json({ message: 'Feedback created successfully', feedback });
    } catch (error) {
        console.log("There is some error in creating course feedback", error);
        res.status(500).json({ error: 'Internal server error occurred' });
    }
};

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({})
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getCoursesById = async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const courses = await Course.find({
            author: authorId
        })
        if (!courses) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        await Course.deleteOne({_id: courseId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }
    res.status(204).json({ message: "Course has been deleted successfully" });
};

export const getFeedbacksOfCourses = async (req, res) => {
    try {
        const { course_id } = req.params;
        const feedbacks = await CourseFeedback.find({ course_id: course_id })
        res.status(200).json({feedbacks});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
}
export const deleteFeedbacks = async (req, res) => {
    try {
        const { feedback_id } = req.params;
        await CourseFeedback.deleteOne({_id: feedback_id});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error'});
        return;
    }
    res.status(204).json({ message: "Feedback has been deleted successfully" });
};


export const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const parsedCourse = req.body;

    await Course.updateOne({ _id: courseId },
        parsedCourse
    );

    res.json({
        msg: "Updated successfully"
    });
};