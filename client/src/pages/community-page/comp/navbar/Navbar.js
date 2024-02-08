import React, { useState } from 'react';
import './style.css';
import CommunityModal from '../modal';

const Navbar = (user) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="navbar">
      <div className="left-part">
        <img src="logo.png" alt="Logo" />
        <h4>Communities</h4>
      </div>
      <div className="right_nav">
        <div className="search-bar">
            <input type="text" placeholder="Search Community" />
        </div>
        <button className="community_search" onClick={toggleModal}>
            Create Community
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
                <h2>Create Community</h2>
                <CommunityModal user={user}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
