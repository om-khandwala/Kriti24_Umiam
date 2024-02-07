import axios from "axios";

export const getUser = async (storedToken) => {
  try {
    const token = storedToken;
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.get("http://localhost:5050/api/user", config);
    console.log(response.data.user[0]);
    return response.data.user[0];
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const updateUser = async (userId) => {
  console.log(userId);
  const response = await axios.get(
    `http://localhost:5050/api/user/update/${userId}`
  );
  return response.data;
};
export const findAllUsers = async () => {
  const response = await axios.get(`http://localhost:5050/api/user`);
  //   console.log(response.data.user);
  return response.data.user;
};
