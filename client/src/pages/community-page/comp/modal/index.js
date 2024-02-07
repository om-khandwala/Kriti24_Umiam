import React, { useEffect, useState } from 'react';
import './style.css';

const CommunityModal = () => {
  const [alluser , setAllUser] = useState([]);
  const [communityData, setCommunityData] = useState({
    name: '',
    description: '',
    tags: '',
    members: []
  });

  // useEffect(()=>{
  //   const users = async () => {
  //     const fetchedUser = await 
  //   }

  //   users()
  // },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      const tagsArray = value.split(',').map(tag => tag.trim());
      setCommunityData({ ...communityData, [name]: tagsArray });
    } else {
      setCommunityData({ ...communityData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(communityData)
   
  };

  return (
    <div className='community-form'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={communityData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={communityData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Tags (separated by commas):
            <input
              type="text"
              name="tags"
              value={communityData.tags}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create</button>
        </form>
    </div>
  );
};

export default CommunityModal;

