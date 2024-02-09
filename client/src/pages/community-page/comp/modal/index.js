import React, { useEffect, useState } from 'react';
import './style.css';
import { allGroups, createChat, createGroup, getGroup } from '../../../../api/groups';
import { all } from 'axios';

const CommunityModal = ({user,updategroupsnav,toggleModal}) => {
  const [alluser , setAllUser] = useState([]);
  const [communityname, setCommunityname] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [members, setmembers] = useState([user._id]);

  // const [communityData, setCommunityData] = useState({
  //   name: '',
  //   description: '',
  //   tags: '',
  //   members: []
  // });

  // useEffect(()=>{
  //   const users = async () => {
  //     const fetchedUser = await 
  //   }

  //   users()
  // },[])
  const handlecommumityname = (e) => {
    setCommunityname(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleTagChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedTags(prevSelectedTags => [...prevSelectedTags, ...selectedOptions]);
  };
  const removeTag = (tagToRemove) => {
    setSelectedTags(prevSelectedTags => prevSelectedTags.filter(tag => tag !== tagToRemove));
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'tags') {
  //     const tagsArray = value.split(',').map(tag => tag.trim());
  //     setCommunityData({ ...communityData, [name]: tagsArray });
  //   } else {
  //     setCommunityData({ ...communityData, [name]: value });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!communityname) {
      alert('Please fill in project name');
      return;
    }
    if(!description){
      alert('desc');
      return;
    }
    if(!selectedTags.length){
      alert('tags');
      return;
    }

    const data = {
      name: communityname,
      description: description,
      tags: selectedTags,
      members:members
    };

    try {
      console.log(data);
      const response = await createGroup(data);
      const groups= await allGroups();
      alert('group created successfully!');
      toggleModal();
      updategroupsnav();

      // console.log(response);
      setCommunityname('');
      setDescription('');
      setSelectedTags([]);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className='community-form'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={communityname}
              onChange={handlecommumityname}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={description}
              onChange={handleDescription}
            />
          </label>
          <div>
            <label htmlFor="tags">Tags</label>
            <select
              id="tags"
              onChange={handleTagChange}
              value={selectedTags}
            >
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
                <li key={index} onClick={() => removeTag(tag)}>{tag}</li>
              ))}
            </ul>
          </div>
          <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
    </div>
  );
};

export default CommunityModal;

