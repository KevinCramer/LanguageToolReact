import { consistentStyles } from '../../../constants';
import howToTypeJapaneseTutorial from '../../../data/raw-data/tutorial-videos/how-to-type-japanese.mp4'
import PageTitle from '../../../components/atoms/PageTitle';
import { useState } from 'react';

const TypingJapaneseExplained = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='max-w-screen-md mx-auto text-center px-4'>
      <div>
        <PageTitle title='How to Type Japanese' />
        <div className='py-2'>
          <a className={`${consistentStyles.blueText} underline`} href='#' onClick={openModal}>
              How to Type Japanese on a Mac
          </a>
        </div>
        <div className={`${consistentStyles.textBlack} py-2`}>
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

export default TypingJapaneseExplained;
