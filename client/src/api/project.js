import axios from "axios";
import { Navigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const createProject = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/project/create",
      data
    );
    return response.data;
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const updateProject = async (data, id) => {
  try {
    const response = await axios.put(
      `http://localhost:5050/api/project/update/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const allProject = async () => {
  try {
    const response = await axios.get("http://localhost:5050/api/project/");
    return response.data.project;
  } catch (error) {
   // console.log("some network issues ");
    return <h3>Network Error</h3>;
  }
};

export const recentProject = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5050/api/project/recent"
    );
    return response.data;
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const userProjects = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/project/user/${id}`
    );
    return response.data.projects;
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/project/get-project/${id}`
    );
    return response.data.project;
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};
