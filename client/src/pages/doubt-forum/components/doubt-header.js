import React, { useEffect, useState } from "react";
import "./doubt-header.css";
import { allDoubts, createDoubt } from "../../../api/doubt";
import HorizontalLine from '../../../componets/line';

function DoubtHeader({ setDoubts, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const data = {
        title: formData.title,
        description: formData.body,
        tags: selectedTags,
        author: id, // from session storage
      };

      await createDoubt(data);
      const allDoubtsData = await allDoubts();
      allDoubtsData.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setDoubts(allDoubtsData);
      closeModal();
    } catch (error) {
      console.error("Error submitting doubt:", error);
    }
  };

  return (
    <div className="doubt-header">
      <h3>Doubts Forum</h3>
      <div className="flex">
        <button onClick={openModal}>Ask question</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="flex space-between">
              <h2>Ask a Question</h2>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <HorizontalLine color={'black'}/>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={handleInputChange} />

            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              className="body"
              onChange={handleInputChange}
            />

            <label htmlFor="tags"> Tags:</label>
            <select id="tags" onChange={handleTagChange} value={selectedTags}>
              <option value="react">React</option>
              <option value="javascript">JavaScript</option>
              <option value="css">CSS</option>
              <option value="mongodb">Mongo DB</option>
              <option value="svelte">Svelte</option>
              <option value="express">Express</option>
            </select>

            <ul>
              {selectedTags.map((tag, index) => (
                <li key={index} onClick={() => removeTag(tag)}>
                  {tag}
                </li>
              ))}
            </ul>

            <HorizontalLine color={'black'}/>

            <div className="footer">
              <i class="fa-solid fa-paperclip"></i>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoubtHeader;
