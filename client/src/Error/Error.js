// errorHandling.js
import { Navigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const handleAxiosError = (error) => {
  console.error("An error occurred:", error);
  // Redirect to home page or handle the error as needed
  return <Navigate to="/" />;
};

export default handleAxiosError;
