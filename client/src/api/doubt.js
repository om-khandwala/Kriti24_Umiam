import axios from 'axios';

export const allDoubts = async () => {
    const response = await axios.get('http://localhost:5050/api/doubts'); 
    console.log(response.data.doubts);
    return response.data.doubts; 
}

export const userDoubts = async () => {
    const response = await axios.get('http://localhost:5050/api/user/doubts'); 
    return response.data;
}

export const createDoubt = async (data) => {
    console.log(data);
    const response = await axios.post('http://localhost:5050/api/doubts/create', data); 
    return response.data; 
}

export const getRepliesOfDoubt = async (doubtId) => {
    console.log(doubtId);
    const response = await axios.get(`http://localhost:5050/api/doubts/${doubtId}/replies`); 
    //console.log(response.data.requiredReplies)
    return response.data.requiredReplies;
}

export const replyDoubt = async (doubtId, data) => {
    console.log(doubtId);
    const response = await axios.post(`http://localhost:5050/api/doubts/${doubtId}/replies`, data); 
    return response.data; 
}
