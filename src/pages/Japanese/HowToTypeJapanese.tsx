import howToTypeJapaneseTutorial from '../../data/raw-data/tutorial-videos/how-to-type-japanese.mp4'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const HowToTypeJapanese = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <div>
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
        <div>
          <div>
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
