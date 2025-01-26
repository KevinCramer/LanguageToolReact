const Japanese = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4 md:text-lg text-center">
      <h4 className="text-center text-2xl py-12"></h4>
      <div className="border border-gray-300 rounded-xl p-2">
        <div className="text-xl mb-4 font-bold">Study Guide</div>
        <div className="mb-4">
          Take the guesswork out of learning Japanese with our expertly-crafted study guide. 
          Perfect for beginners and advanced learners alike!
        </div>
        <div>
          <button className="w-[200px] mb-4 border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl text-lg md:text-xl transform transition-transform duration-200 hover:scale-105">
            Access Study Guide
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mt-8">
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left">
          <div className="text-xl mb-4 text-blue-500 underline">Writing Systems</div>
          <div className="mb-4">
            Master Hiragana, Katakana, and Kanji with simple lessons and exercises.
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left">
          <div className="text-xl mb-4 text-blue-500 underline">Vocabulary</div>
          <div className="mb-4">
            Learn essential words and phrases for everyday conversations.
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left">
          <div className="text-xl mb-4 text-blue-500 underline">Grammar</div>
          <div className="mb-4">
            Understand sentence structure and build natural Japanese sentences. 
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left">
          <div className="text-xl mb-4 text-blue-500 underline">Reading & Listening</div>
          <div className="mb-4">
            Improve your comprehension with real-world texts and audio materials.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Japanese;
