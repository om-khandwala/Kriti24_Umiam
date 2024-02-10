import React, { useState } from 'react';
import './upload.css';

const FileUpload = ({setProjectImages}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

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
      setProjectImages(prevUrls => [...prevUrls, secureUrl]);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUploadButtonClick = () => {
    for (let i = 0; i < selectedFiles.length; i++) {
      handleUpload(selectedFiles[i]);
    }
  };

  return (
    <div className="create-project-upload">
      <div className='flex'>
        <label for='images'>Click here to select media</label>
        <input id= 'images' name='images' type="file" onChange={handleFileChange} multiple />
        <div onClick={handleUploadButtonClick} className='btn'>Upload Images</div>
        {isUploading && <div className='loading'>Loading...</div>}
      </div>
    </div>
  );
};

export default FileUpload;
