import axios from "axios";
import handleAxiosError from "../Error/Error";

export const allCourses = async () => {
  try {
    const response = await axios.get("http://localhost:5050/api/courses/get");

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const CoursesById = async (authorId) => {
  try {
    const response = await axios.get(
      "http://localhost:5050/api/courses/getById/" + authorId
    );

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const allFeedbacks = async (courseId) => {
  try {
    const response = await axios.get(
      "http://localhost:5050/api/courses/getFeedbacks/" + courseId
    );

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const createCourse = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/courses/create",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const createFeedback = async (courseId, data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/courses/feedback/" + courseId,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const updateCourse = async (courseId, data) => {
  try {
    const response = await axios.put(
      "http://localhost:5050/api/courses/update/" + courseId,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const currentUser = async () => {
  try {
    const response = await axios.get("http://localhost:5050/api/user/userData");

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
