import axios from 'axios';

export const allGroups = async () => {
    const response = await axios.get('http://localhost:5050/api/groups/'); 
  //  console.log(response.data.groups);
    return response.data.groups; 
}

export const getGroup = async (id) => {
  const response = await axios.get(`http://localhost:5050/api/groups/${id}`); 
  console.log(response.data);
  return response.data; 
}