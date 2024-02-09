import express from 'express';
import { createCourse, createCourseFeedback, deleteCourse, deleteFeedbacks, getCourses, getCoursesById, getFeedbacksOfCourses, updateCourse } from '../modules/courses/courses.controller.js';
const router = express.Router();



router.post('/create', createCourse);
router.post("/feedback/:course_id", createCourseFeedback);
router.get("/get", getCourses);
router.get("/getById/:authorId", getCoursesById);
router.delete("/delete/:courseId", deleteCourse);
router.get("/getFeedbacks/:course_id", getFeedbacksOfCourses);
router.delete("/deleteFeedback/:feedback_id", deleteFeedbacks);
router.put("/update/:id", updateCourse);

export default router;