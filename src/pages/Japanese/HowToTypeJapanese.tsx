import { Modal } from 'react-bootstrap';
import './Japanese.scss';
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
          <h4 style={{ paddingBottom: '40px' }}>How to Type Japanese</h4>
          <div style={{ paddingBottom: '50px', textAlign: 'center' }}>
            <a href="#" onClick={openModal} style={{ color: 'rgb(13, 110,253)', textDecoration: 'underline' }}>
              How to Type Japanese on a Mac
            </a>
          </div>
          <div style={{ paddingTop: '50px',textAlign: 'center' }}>
           Video Tutorials for Windows, iPhone
          </div>
          <div style={{ textAlign: 'center' }}>
          and Android coming soon.
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: 'center', width: '100%' }}>How to Guide</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <video
                    style={{ margin: '0 auto', display: 'block', maxWidth: '100%' }}
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
