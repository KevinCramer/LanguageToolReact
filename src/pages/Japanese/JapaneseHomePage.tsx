import { consistentStyles } from '../../constants';
import { useNavigate } from 'react-router-dom';

const JapaneseHomePage = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

  return (
    <div className="max-w-screen-md mx-auto px-2 text-center text-lg">
      <h4 className="text-center text-2xl pt-12 pb-4 md:py-12"> Japanese Home Page</h4>
      {!isMobile && <div className="md:border border-gray-300 rounded-xl px-4 py-4 w-full hover:cursor-pointer md:hover:bg-gray-100"
        onClick={() => navigate('/japanese/study-guide')}>
        <div className={`text-xl mb-4 font-bold ${consistentStyles.textBlack}`}></div>
        <div className={`mb-4 ${consistentStyles.textBlack}`}>   
               Take the guesswork out of learning Japanese with our study guide. 
          Perfect for beginners and advanced learners alike!
        </div>
        <div>
          <button
            className={`w-[200px] mb-4 border-[1px] border-b-4 ${consistentStyles.blueBackground} ${consistentStyles.darkBlueBorder} text-center ${consistentStyles.textWhite} p-2 rounded-2xl`}
            onClick={() => navigate('/japanese/study-guide')}
          >
            <div>Access Study Guide</div>
          </button>
        </div>
      </div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 justify-items-center md:mt-8">
        { isMobile && <div className="md:border border-gray-300 rounded-xl m-2 px-4 md:py-4 w-full md:text-left hover:cursor-pointer md:hover:bg-gray-100">
          <div className={`text-xl  md:mb-4 ${consistentStyles.blueText} underline`}>
            <a href='/japanese/study-guide'>
            Study Guide
            </a>
          </div>
          <div className={`mb-4 ${consistentStyles.textBlack}`}>
          Take the guesswork out of learning Japanese with our study guide. 
          Perfect for beginners and advanced learners alike!
          </div>
        </div>}
        <div className="md:border border-gray-300 rounded-xl m-2 px-4 md:py-4 w-full md:text-left hover:cursor-pointer md:hover:bg-gray-100"
          onClick={() => {
            if (!isMobile) {
              navigate('/japanese/writing-systems-explained');
            }
          }}>
          <div className={`text-xl  md:mb-4 ${consistentStyles.blueText} underline`}>
            <a href='/japanese/writing-systems-explained'>
            Writing Systems
            </a>
          </div>
          <div className={`mb-4 ${consistentStyles.textBlack}`}>
            Master Hiragana, Katakana, and Kanji with simple lessons and exercises.
          </div>
        </div>
        <div className="md:border border-gray-300 rounded-xl m-2 px-4 md:py-4 w-full md:text-left hover:cursor-pointer md:hover:bg-gray-100"
          onClick={() => {
            if (!isMobile) {
              navigate('/japanese/vocabulary-guide');
            }
          }}>
          <div className={`text-xl  md:mb-4 ${consistentStyles.blueText} underline`}>
            <a href='/japanese/vocabulary-guide'>
            Vocabulary
            </a>
          </div>
          <div className={`mb-4 ${consistentStyles.textBlack}`}>
            Learn essential words and phrases for everyday conversations.
          </div>
        </div>
        <div className="md:border border-gray-300 rounded-xl m-2 px-4 md:py-4 w-full md:text-left hover:cursor-pointer md:hover:bg-gray-100"
          onClick={() => {
            if (!isMobile) {
              navigate('/japanese/grammar/keigo');
            }
          }}>
          <div className={`text-xl  md:mb-4 ${consistentStyles.blueText} underline`}>
            <a href='/japanese/grammar/keigo'>
            Grammar
            </a>
          </div>
          <div className={`mb-4 ${consistentStyles.textBlack}`}>
            Understand sentence structure and build natural Japanese sentences. 
          </div>
        </div>
        <div className="md:border border-gray-300 rounded-xl m-2 px-4 md:py-4 w-full md:text-left hover:cursor-pointer md:hover:bg-gray-100"
          onClick={() => {
            if (!isMobile) {
              navigate('/japanese/reading-listening/aikos-book-sanctuary?L=WritingSystem3&R=English&gran=paragraph');
            }
          }}>
          <div className={`text-xl  md:mb-4 ${consistentStyles.blueText} underline`}>
            <a href='/japanese/reading-listening/aikos-book-sanctuary?L=WritingSystem3&R=English&gran=paragraph'>
            Reading & Listening
            </a>
          </div>
          <div className={`mb-4 ${consistentStyles.textBlack}`}>
            Improve your comprehension with real-world texts and audio materials.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseHomePage;
