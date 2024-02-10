import React, { useEffect, useState} from 'react';
import './style.css';
import FileUpload from './file-upload';
import LogoUpload from './logo-upload';
import { useNavigate } from 'react-router-dom'
import { createProject } from '../../api/project';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProjectUploadPage({ user }) {
  const [logo, setLogo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [githubLink, setGithubLink] = useState("");
  const [projectOutcomes, setProjectOutcomes] = useState([]);
  const [isLogo, setIsLogo] = useState(false);
  const [isImages, setIsImages] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogo(logo !== "");
  }, [logo]);

  useEffect(() => {
    setIsImages(projectImages.length > 0);
  }, [projectImages]);

  const handleProjectName = (e) => {
    setProjectName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTagChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedTags((prevSelectedTags) => [
      ...prevSelectedTags,
      ...selectedOptions,
    ]);
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleOutcomeChange = (e) => {
    const outcomes = e.target.value;
    setProjectOutcomes(outcomes);
  };

  const handleRepoLink = (e) => {
    const link = e.target.value;
    setGithubLink(link);
  };

  const notify = (msg) => toast(msg);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName) {
      notify('Please fill in project name');
      return;
    }
    if(!description){
      notify('Enter Descrition of project');
      return;
    }

    if(!selectedTags.length){
      alert('Add tags to your project');
      return;
    }

    if(!projectOutcomes){
      alert('Add outcomes of your project');
      return;
    }

    const data = {
      projectName: projectName,
      description: description,
      links: {
        image: projectImages,
      },
      repository: githubLink,
      author: user._id,
      tags: selectedTags,
      logo: logo,
      outcomes: projectOutcomes,
    };

    try {
      console.log(data);
      const response = await createProject(data);
      // console.log(response);

      
      setProjectName('');
      setDescription('');
      setProjectImages([]);
      setSelectedTags([]);
      setGithubLink('');
      setLogo('');
      setProjectOutcomes('');
     
      notify('Project created Succesfully');
      navigate('/feed');

    } catch (error) {
      alert("Project not created !");
      console.error("Error creating project:", error);
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
    <div className='upload-project-form'>
      <div className='left'>
        <img src='/images/logo.png' className='logo' alt='logo'/>
        <h2>Upload Project</h2>
        <p>
          "Transform ideas into reality; craft innovative solutions that inspire
          and empower users worldwide."
        </p>
        <form>
          <div>
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              placeholder="Enter Project Name"
              value={projectName}
              onChange={handleProjectName}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              placeholder="Enter Description"
              onChange={handleDescription}
              required
            />
          </div>
          <div>
            <label htmlFor="projectOutcomes">Project Outcomes </label>
            <textarea
              type="text"
              id="projectOutcomes"
              onChange={handleOutcomeChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tags">Tags</label>
            <select id="tags" onChange={handleTagChange} value={selectedTags}>
              <option value="react">React</option>
              <option value="javascript">JavaScript</option>
              <option value="css">CSS</option>
              <option value="mongodb">Mongo DB</option>
              <option value="svelte">Svelte</option>
              <option value="express">Express</option>
            </select>
          </div>
          <div>
            <ul>
              {selectedTags.map((tag, index) => (
                <li key={index} onClick={() => removeTag(tag)}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label htmlFor="projectDirectory">Github Repository Link</label>
            <input
              type="text"
              className="upload"
              onChange={handleRepoLink}
              id="projectDirectory"
              required
            />
          </div>
          <FileUpload setProjectImages={setProjectImages} />
          <input type="checkbox" checked={isImages} readOnly />
          <LogoUpload setLogo={setLogo} />
          <input type="checkbox" checked={isLogo} readOnly />
         
          {/* <p>{projectImages}  {logo}</p> */}
          <button type="submit" onClick={handleSubmit}>
            Upload Project
          </button>
        </form>
      </div>
      <div className="right"></div>
    </div>
    </>
  );
}

export default ProjectUploadPage;
