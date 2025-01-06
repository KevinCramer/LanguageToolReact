import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import howToTypeJapaneseTutorial from '../../data/raw-data/tutorial-videos/how-to-type-japanese.mp4'

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const HowToTypeJapanese = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4>How to Type Japanese</h4>
          <div>
            <a href="#" onClick={openModal}>
              How to Type Japanese on a Mac
            </a>
          </div>
          <div>
           Video Tutorials for Windows, iPhone
          </div>
          <div>
          and Android coming soon.
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>How to Guide</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <video
                    controls
                    src={howToTypeJapaneseTutorial}
                  />
                </div>
              
              </Modal.Body>
            </Modal>
          </div>
          
        </div>
      )}
    </>
  );
};

export default HowToTypeJapanese;
