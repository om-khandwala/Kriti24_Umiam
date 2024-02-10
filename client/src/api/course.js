import axios from 'axios';

export const allCourses = async () => {
    const response = await axios.get("http://localhost:5050/api/courses/get");
    console.log(response.data);
    return response.data;
}

export const CoursesById = async (authorId) => {
    const response = await axios.get("http://localhost:5050/api/courses/getById/"+authorId);
    console.log(response.data);
    return response.data;
}

export const allFeedbacks = async (courseId) => {
    const response = await axios.get("http://localhost:5050/api/courses/getFeedbacks/"+courseId);
    console.log(response.data);
    return response.data;
}

export const createCourse = async (data) => {
    const response = await axios.post("http://localhost:5050/api/courses/create", data);
    console.log(response.data);
    return response.data;
}

export const createFeedback = async (courseId, data) => {
    const response = await axios.post("http://localhost:5050/api/courses/feedback/"+courseId, data);
    console.log(response.data);
    return response.data;
}

export const updateCourse = async (courseId, data) => {
    const response = await axios.put("http://localhost:5050/api/courses/update/"+courseId, data);
    console.log(response.data);
    return response.data;
}

export const currentUser = async () => {
    const response = await axios.get("http://localhost:5050/api/user/userData");
    console.log(response.data)
    return response.data;
}

export const getUser = async (id) => {
    const response = await axios.get("http://localhost:5050/api/user/find/"+id);
    // console.log(response.data.user[0])
    return response.data.user[0];
}

