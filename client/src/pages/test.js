import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }
    const signResponse = await fetch('http://localhost:5050/api/apisignreq');
    const signData = await signResponse.json();
    const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append("api_key", signData.apikey);
    formData.append("timestamp", signData.timestamp);
    formData.append("signature", signData.signature);
    formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
    formData.append("folder", "signed_upload_demo_form");

    
    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        console.log(JSON.parse(data))
    });
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;