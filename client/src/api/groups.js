import axios from 'axios';
axios.defaults.withCredentials = true
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

export const createGroup = async (data) => {
  const response = await axios.post(`http://localhost:5050/api/groups/create`,data); 
  console.log(response.data);
  return response.data; 
}

export const createChat = async (data) => {
  console.log(data);
  const response = await axios.post(`http://localhost:5050/api/groups/group-chat`,data); 
  return response.data; 
}

export const getGroupChat = async (id) => {
  const response = await axios.get(`http://localhost:5050/api/groups/group-chat/${id}`); 
 // console.log(response.data);
  return response.data.groupChat[0].chats; 
}

export const joinGroup = async (data) => {
  console.log(data);
  const response = await axios.post(`http://localhost:5050/api/groups/group-join`, data); 
  // console.log(data);
  return response.data; 
}

