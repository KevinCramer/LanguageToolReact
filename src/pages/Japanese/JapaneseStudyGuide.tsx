const JapaneseStudyGuide = () => {

  return (
    <div className="max-w-screen-md mx-auto px-4 text-lg">
      <h4 className="text-center text-2xl pt-12">Japanese Study Guide </h4>
      <div className='pb-4 pt-8'>
        <div className='underline font-bold'>Step 1:</div>
          It is essential to understand how the Japanese writing systems work. Spend a few minutes reading about it {' '}
        <a className='text-blue-500 underline' href='/japanese/writing-systems-explained'>
         here
        </a>
        .
      </div>
      <div className='py-4'>
        <div className='underline font-bold'>Step 2:</div>
        Learning hiragana is the first step to learning Japanese.
           Study these lessons in order:

        <ul className='flex flex-col'>
          <a className='text-blue-500 underline' href='/japanese/hiragana-explained?lesson=1'>
         Lesson 1 - Basic Hiragana
          </a>
          <a className='text-blue-500 underline' href='/japanese/hiragana-explained?lesson=2'>
         Lesson 2 - Hiragana with Dakuten and Handakuten
          </a>
          <a className='text-blue-500 underline' href='/japanese/hiragana-explained?lesson=3'>
         Lesson 3 - Yoōn Hiragana
          </a>
        </ul>
      </div>

      <div className='py-4'>
        <div className='underline font-bold'>Step 3:</div>

           The next step to mastering Japanese is to learn Katakana. Study these lessons in order:
        <ul className=' flex flex-col'>
          <a className='text-blue-500 underline' href='/japanese/katakana-explained?lesson=1'>
         Lesson 1 - Basic Katakana
          </a>
          <a className='text-blue-500 underline' href='/japanese/katakana-explained?lesson=2'>
         Lesson 2 - Katakana with Dakuten and Handakuten
          </a>
          <a className='text-blue-500 underline' href='/japanese/katakana-explained?lesson=3'>
         Lesson 3 - Yoōn Katakana
          </a> <a className='text-blue-500 underline' href='/japanese/katakana-explained?lesson=4'>
         Lesson 4 - Foreign Yoōn Katakana
          </a>
          <a className='text-blue-500 underline' href='/japanese/katakana-explained?lesson=5'>
         Lesson 5 - Katakana Long Vowels
          </a>
        </ul>
      </div>

      <div className='py-4'>
        <div className='underline font-bold'>Step 4:</div>
        The Kanji writing system is something you will gain familiarity with as you learn vocabulary. For now 
        read this brief explanation:
        <ul className='flex flex-col'>
          <a className='text-blue-500 underline' href='/japanese/kanji-explained'>
            Lesson 1 - Introduction to Kanji
          </a>
        </ul>
      </div>

      <div className='py-4'>
        <div className='underline font-bold'>Step 5:</div>
          Learning how to type Japanese is simpler than you might expect. Spend a few minutes watching the video guide here:
        <ul className='flex flex-col'>
          <a className='text-blue-500 underline' href='/japanese/how-to-type-japanese'>
          How To Type Japanese
          </a>
        </ul>
      </div>

      <div className='py-4'>
        <div className='underline font-bold'>Step 6:</div>
        Practice vocabulary exercises on various topics. Dedicate 15 minutes to studying vocabulary for each topic,
         followed by a quiz. Aim to repeat the quiz until you can consistently score at least 90%. Begin your vocabulary practice here:
        <ul className=' flex flex-col max-w-[400px]'>
          <a className='text-blue-500 underline' href='/japanese/vocabulary-guide'>
          Vocabulary Exercises
          </a>
        </ul>
  
      </div>

      <div className='py-4'>
        <div className='underline font-bold'>Step 7:</div>
           In order to gain true familiarity with the japanese language being able to listen and read Japanese is essential.
          Now that you understand how Japanese writing systems work and you have built up some vocabulary you are ready to 
          start these exercises:
        <div>
          <a
            className='text-blue-500 underline'
            href='/japanese/reading-listening/aikos-book-sanctuary?eng=F'>
          reading and listening exercises
          </a>
        </div>
       
      </div>
    </div>
  );
};
export default JapaneseStudyGuide;
