import React, { useState } from 'react';
import './style.css';

function ProjectUploadPage() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [projectDirectory, setProjectDirectory] = useState(null);
  const [projectImages, setProjectImages] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleProjectName = (e) => {
    setProjectName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleProjectDirectory = (e) => {
    const file = e.target.files[0];
    setProjectDirectory(file);
  };

  const handleImages = (e) => {
    const file = e.target.files[0];
    setProjectImages(file);
  };

  const handleTagChange = (e) => {
    console.log(e.target.selectedOptions);
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedTags(prevSelectedTags => [...prevSelectedTags, ...selectedOptions]);
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(prevSelectedTags => prevSelectedTags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // use cloudinary here 

    setProjectName('');
    setDescription('');
    setProjectDirectory(null);
    setProjectImages(null);
    setSelectedTags([]);
  };

  return (
    <div className='upload-project-form'>
        <h2>Create Project</h2>
        <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="projectName">Project Name:</label>
            <input
            type="text"
            id="projectName"
            placeholder='Enter Project Name'
            value={projectName}
            onChange={handleProjectName}
            required
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
            id="description"
            value={description}
            placeholder='Enter Description'
            onChange={handleDescription}
            required
            />
        </div>
        <div>
            <label htmlFor="tags">Tags:</label>
            <select
            id="tags"
            onChange={handleTagChange}
            value={selectedTags}
            >
            <option value="react">React</option>
            <option value="javascript">JavaScript</option>
            <option value="css">CSS</option>
            <option value="monogodb">Mongo DB</option>
            <option value="svelte">Svelte</option>
            <option value="express">Express</option>
            </select>
        </div>
        <div>
            <ul>
            {selectedTags.map((tag, index) => (
                <li key={index} onClick={() => removeTag(tag)}>{tag}</li>
            ))}
            </ul>
        </div>
        <div>
            <label htmlFor="projectDirectory">Project Directory:</label>
            <input
            type="file"
            className='upload'
            id="projectDirectory"
            onChange={handleProjectDirectory}
            required
            />
        </div>
        <div>
            <label htmlFor="imgesUpload">Images of Project:</label>
            <input
            type="file"
            className='upload'
            id="imageUpload"
            onChange={handleImages}
            multiple
            required
            />
        </div>

        <button type="submit">Upload Project</button>
        </form>
    </div>
  );
}

export default ProjectUploadPage;
