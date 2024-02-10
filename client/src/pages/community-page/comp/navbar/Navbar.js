import React, { useState } from 'react';
import './style.css';
import CommunityModal from '../modal';

const NavbarSecondary = ({user}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="navbar-community">
      <div className="left-part">
         <i className="fa-solid fa-satellite-dish"></i>
        <h4>Communities</h4>
      </div>
      <button className="community_search" onClick={toggleModal}>
        Create Community
      </button>
    

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
                <h2>Create Community</h2>
                <CommunityModal user={user} toggleModal={toggleModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarSecondary;
