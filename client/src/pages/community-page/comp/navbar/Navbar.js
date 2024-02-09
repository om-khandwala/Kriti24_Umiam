import React, { useState } from 'react';
import './style.css';
import CommunityModal from '../modal';

const NavbarSecondary = (user,updategroups) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updategroupsnav = ()=>{
    updategroups();
  }

  return (
    <div className="navbar">
      <div className="left-part">
         <i class="fa-solid fa-satellite-dish"></i>
        <h4>Communities</h4>
      </div>
      <div className="right_nav">
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
                <CommunityModal user={user} updategroupsnav={updategroupsnav} toggleModal={toggleModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarSecondary;
