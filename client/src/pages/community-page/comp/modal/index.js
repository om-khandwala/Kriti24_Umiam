import React, { useState } from 'react';
import './style.css';
import { createGroup } from '../../../../api/groups';

const CommunityModal = ({ user, toggleModal }) => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCommunityName = (e) => {
    setCommunityName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTagChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedTags(prevSelectedTags => [...prevSelectedTags, ...selectedOptions]);
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!communityName || !description || !selectedTags.length) {
      alert('Please fill in all fields');
      return;
    }

    const data = {
      name: communityName,
      description: description,
      tags: selectedTags,
      members: [user._id]
    };

    try {
      const response = await createGroup(data);
      alert('Group created successfully!');
      toggleModal();

      setCommunityName('');
      setDescription('');
      setSelectedTags([]);
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  return (
    <div className="community-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={communityName}
            onChange={handleCommunityName}
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CommunityModal;
