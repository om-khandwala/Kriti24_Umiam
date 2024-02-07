import axios from 'axios';
axios.defaults.withCredentials = true
export const createProject = async (data) => {
    // console.log(data);
    const response = await axios.post('http://localhost:5050/api/project/create', data); 
    return response.data; 
}

export const updateProject = async (data,id) => {
  const response = await axios.put(`http://localhost:5050/api/project/update/${id}`, data); 
  return response.data; 
}

export const allProject = async () => {
    const response = await axios.get('http://localhost:5050/api/project/'); 
    console.log(response.data);
    return response.data.project; 
}

export const recentProject = async () => {
    const response = await axios.get('http://localhost:5050/api/project/recent'); 
  //  console.log(response.data);
    return response.data; 
}

export const userProjects = async (id) => {
  const response = await axios.get(`http://localhost:5050/api/project/user/${id}`); 
 // console.log('dfklgdfklgkldfgkdfgklfdkg',response.data);
  return response.data.projects; 
}
