import React, { useState } from "react";
import './style.css';
import { updateUser } from "../../api/user";
import {Link} from 'react-router-dom';

function UserForm({ user }) {
    const [formData, setFormData] = useState({
        name: `${user.name}`,
        email: `${user.email}`,
        branch: `${user.branch}`,
        degree: "",
        shortDescription: "",
        description: "",
        rollNumber: `${user.rollNumber}`,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
            console.log("User data updated successfully!");
        } catch (error) {
            throw new Error("Failed to update user data");
        }
    };
     

    return (
        <div className="user-form">
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
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        readOnly
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
                <div>
                    <label>Roll Number:</label>
                    <input
                        type="number"
                        name="rollNumber"
                        value={formData.rollNumber}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <button type="submit">Submit</button>
                <Link to='/feed'>Skip for now</Link>
            </form>
        </div>
    );
}

export default UserForm;
