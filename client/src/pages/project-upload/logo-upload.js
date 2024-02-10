import React, { useState } from "react";
import './upload.css';

function LogoUpload({ setLogo }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleLogoChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleLogoUpload = async () => {
        if (!selectedFile) {
            console.error('No file selected for upload');
            return;
        }

        try {
            setIsUploading(true);

            const signResponse = await fetch('https://umiam-kriti24.onrender.com/api/apisignreq');

            const signData = await signResponse.json();

            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append("api_key", signData.apikey);
            formData.append("timestamp", signData.timestamp);
            formData.append("signature", signData.signature);
            formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
            formData.append("folder", "signed_upload_demo_form");

            const url = `https://api.cloudinary.com/v1_1/${signData.cloudname}/auto/upload`;

            const uploadResponse = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!uploadResponse.ok) {
                throw new Error('Failed to upload file to Cloudinary');
            }

            const responseData = await uploadResponse.json();
            const secureUrl = responseData.secure_url;

            console.log("File uploaded successfully:", secureUrl);
            setLogo(secureUrl);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="create-project-upload">
            <div className='flex'>
                <label for='logo'>Click here to upload logo</label>
                <input id='logo' name='logo' type="file" onChange={handleLogoChange} />
                <div onClick={handleLogoUpload} className="btn">Upload Logo</div>
                {isUploading && <div className="loading">Loading...</div>}
            </div>
        </div>
    );
}

export default LogoUpload;
