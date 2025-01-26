const Japanese = () => {
  return (
    <div className="max-w-screen-md mx-auto px-2 md:text-lg text-center">
      <h4 className="text-center text-2xl py-12"></h4>
      <div className="border border-gray-300 rounded-xl px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
        onClick={() => window.location.href = 'study-guide'}>
        <div className="text-xl mb-4 font-bold"> Japanese Study Guide</div>
        <div className="mb-4">
          Take the guesswork out of learning Japanese with our study guide. 
          Perfect for beginners and advanced learners alike!
        </div>
        <div>
          <button
            className="w-[200px] mb-4 border-[1px] border-b-4 bg-blue-500 border-blue-700 text-center text-white p-2 rounded-2xl text-lg md:text-xl transform transition-transform duration-200 hover:scale-105"
            onClick={() => window.location.href = 'study-guide'}
          >
            <div>Access Study Guide</div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-8">
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left hover:cursor-pointer"
          onClick={() => window.location.href = 'writing-systems-explained'}>
          <div className="text-xl mb-4 text-blue-500 underline">
            <a href='writing-systems-explained'>
            Writing Systems
            </a>
          </div>
          <div className="mb-4">
            Master Hiragana, Katakana, and Kanji with simple lessons and exercises.
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left hover:cursor-pointer"
          onClick={() => window.location.href = 'vocabulary'}>
          <div className="text-xl mb-4 text-blue-500 underline">
            <a href='vocabulary'>
            Vocabulary
            </a>
          </div>
          <div className="mb-4">
            Learn essential words and phrases for everyday conversations.
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left hover:cursor-pointer"
          onClick={() => window.location.href = 'grammar/keigo'}>
          <div className="text-xl mb-4 text-blue-500 underline">
            <a href='grammar/keigo'>
            Grammar
            </a>
          </div>
          <div className="mb-4">
            Understand sentence structure and build natural Japanese sentences. 
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl m-2 px-4 py-4 w-full transform transition-transform duration-200 hover:scale-105 md:text-left hover:cursor-pointer"
          onClick={() => window.location.href = 'reading-listening/aikos-book-sanctuary?L=WritingSystem3&R=English&gran=paragraph'}>
          <div className="text-xl mb-4 text-blue-500 underline"
          >
            <a href='reading-listening/aikos-book-sanctuary?L=WritingSystem3&R=English&gran=paragraph'>
            Reading & Listening
            </a>
          </div>
          <div className="mb-4">
            Improve your comprehension with real-world texts and audio materials.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Japanese;
