import React, { useState } from "react";
import './style.css';
import { updateUser } from "../../api/user";
import {Link , useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserForm({ user }) {
    const [formData, setFormData] = useState({
        name: `${user.name}`,
        branch: `${user.branch}`,
        degree: "",
        shortDescription: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const notify = (msg) => toast(msg);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendData(user._id, formData);
        } catch (error) {
            console.error("Error updating user:", error);
            // Handle error (e.g., display error message to user)
        }
    };
    
    const sendData = async (userId, formData) => {
        try {
            await updateUser(userId, formData);
            notify("Saved data successfully!");
            navigate('/feed')
        } catch (error) {
            notify("Failed to updated!, plz return to home page");
            navigate('/')
            throw new Error("Failed to update user data");
        }
    };
     

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="user-form">
                <div className="form">
                    <div className="text">
                        <h2>Welcome to Our Community</h2>
                        <p>Provide some details for better exprience</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Branch:</label>
                            <input
                                type="text"
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Degree:</label>
                            <input
                                type="text"
                                name="degree"
                                value={formData.degree}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Short Description:</label>
                            <input
                                type="text"
                                name="shortDescription"
                                value={formData.shortDescription}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                        <Link to='/feed'>Skip for now, continue to feed page</Link>
                    </form>
                </div>
                <div className="img">

                </div>
            </div>
        </>
    );
}

export default UserForm;
