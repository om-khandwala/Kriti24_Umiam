import axios from 'axios';

export const createProject = async (data) => {
    console.log(data);
    const response = await axios.post('http://localhost:5050/api/project/create', data); 
    return response.data; 
}