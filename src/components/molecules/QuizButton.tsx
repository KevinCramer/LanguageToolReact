import { BsCheck, BsSquare } from 'react-icons/bs';

const QuizButton = ({ quiz, changeQuizState }: any) => {
  return (
    <button
      className="flex items-center border-[1px] border-b-4 bg-blue-500 border-blue-700 text-blue-500 rounded-lg text-base p-0.5 transform transition-transform duration-200 hover:scale-105"
      onClick={changeQuizState}
    >
      <div className='text-white ml-1'>Quiz</div>
      <div
        style={{ display: 'inline-block', borderRadius: '4px' }}
        className='ml-1.5 mr-1'
      >
        {quiz ? (
          <BsCheck
            size={16}
            className='text-white bg-blue-500 border border-white rounded'
            style={{ strokeWidth: '1' }}
          />
        ) : (
          <BsSquare
            size={16}
            className='text-blue-500 border border-white rounded'
          />
        )}
      </div>
    </button>
  );
};

export default QuizButton;
