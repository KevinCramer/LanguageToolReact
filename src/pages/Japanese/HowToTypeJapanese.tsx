import howToTypeJapaneseTutorial from '../../data/raw-data/tutorial-videos/how-to-type-japanese.mp4'
import { useState } from 'react';

const HowToTypeJapanese = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='max-w-screen-md mx-auto text-center px-4 md:text-lg'>
      <div>
        <h4 className='text-center text-2xl py-12'>How to Type Japanese</h4>
        <div className='py-2'>
          <a className='text-blue-500 underline' href='#' onClick={openModal}>
              How to Type Japanese on a Mac
          </a>
        </div>
        <div className='py-2'>
          <div>
           Video Tutorials for Windows, iPhone
          </div>
          <div>
          and Android coming soon.
          </div>
        </div>
        
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold"></h3>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsModalOpen(false)}>
          ✕
              </button>
            </div>
            <div>
              <video
                controls
                src={howToTypeJapaneseTutorial}
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowToTypeJapanese;
