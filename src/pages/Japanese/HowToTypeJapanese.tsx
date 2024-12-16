import { Modal } from 'react-bootstrap';
import './Japanese.scss';
import React, { useState } from 'react';
import howToTypeJapaneseTutorial from '../../data/raw-data/tutorial-videos/how-to-type-japanese.mp4'

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
          <h4 style={{ paddingBottom: '30px' }}>How to Type Japanese</h4>
          <div style={{ paddingBottom: '20px' }}>
            <a href="#" onClick={openModal} style={{ color: 'blue', textDecoration: 'underline' }}>
              How to Type Japanese on a Mac
            </a>
          </div>
          <div style={{ paddingBottom: '20px' }}>
            How to Type Japanese on Windows: video coming soon.
          </div>
          <div style={{ paddingBottom: '20px' }}>
            How to Type Japanese on an iPhone: video coming soon.
          </div>
          <div style={{ paddingBottom: '20px' }}>
            How to Type Japanese on an Android: video coming soon.
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
