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
        logo:""
    });
    const [logo,setLogo] = useState();
    const [isUploading, setIsUploading] = useState(false);


    const handleimagechange = (event)=>{
        setLogo(event.target.files[0]);
    }

    const handleUpload = async (file) => {
        setIsUploading(true);
    
        if (!file) {
          alert('Please select at least one file');
          setIsUploading(false);
          return;
        }
    
        try {

          const signResponse = await fetch('https://umiam-kriti24.onrender.com/api/apisignreq');


          const signData = await signResponse.json();
          const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";
    
          const formData = new FormData();
    
          formData.append('file', file);
          formData.append("api_key", signData.apikey);
          formData.append("timestamp", signData.timestamp);
          formData.append("signature", signData.signature);
          formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
          formData.append("folder", "signed_upload_demo_form");
    
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error('Failed to upload file to Cloudinary');
          }
    
          const responseData = await response.json();
          const secureUrl = responseData.secure_url;
          console.log(secureUrl)
          setFormData((prevData) => ({
            ...prevData,
            logo: secureUrl,
        }));
        } catch (error) {
          console.error('Error uploading file:', error);
        } finally {
          setIsUploading(false);
        }
      };

      const handleUploadButtonClick = (e) => {
        e.preventDefault();
        handleUpload(logo);
      };

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
            console.log(formData);
            await updateUser(userId, formData);
            notify("Saved data successfully!");

            setTimeout(() => {
                navigate('/feed');
            }, 5000);
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

                        <div className="logo">
                            <label for='logo' className="logo-label">Upload Profile Picture</label>
                            <input
                                id='logo'
                                type="file"
                                name="logo"
                                onChange={handleimagechange}
            
                            />
                            {isUploading && <div className="loading">Loading...</div>}
                            <button onClick={handleUploadButtonClick} className='btn' disabled={!logo} >Upload Logo</button>
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
