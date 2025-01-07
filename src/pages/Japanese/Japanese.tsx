import dart from '../../assets/dart.svg';
import dictionary from '../../assets/dictionary.svg';
import learningKnowledge from '../../assets/learningKnowledge.svg';
import pen from '../../assets/pen.svg';
import upwardTrend from '../../assets/upward-trend.svg';

const Japanese = () => { 
 
  return (
    <div className='flex flex-col items-center'>
      <h4 className='text-center text-2xl py-12'>
        Learn Japanese
      </h4>
      <div>
        LingoCommand helps beginners learn Japanese and gain confidence in their skills.
        We also offer valuable content for advanced users. Try our study guide below:
      </div>
      <a className='center m-4' href="/japanese/study-guide">
        <img src={upwardTrend} width={80} height={80} alt="Study Guide Icon"/>
        <div className='text-blue-500 underline'>
            Study Guide
        </div>
      </a>
      <div>
        Alternatively, you can create your own study plan using the resources available 
        at LingoCommand. The Japanese study materials are divided into four main sections:
      </div>
      <div className='flex flex-col items-center'>
        <a className='flex flex-col items-center m-4' href="/japanese/writing-systems-explained">
          <img src={pen} width={80} height={80} alt="Writing Systems Icon"/>
          < div className='text-center text-blue-500 underline'>
            Writing Systems<br/>(Alphabets)
          </div>
        </a>
        <a className='m-4' href="/japanese/vocabulary">
          <img src={dictionary} width={80} height={80} alt="Vocabulary Icon"/>
          <div className='text-blue-500 underline'>
            Vocabulary
          </div>
        </a>
        <a className='m-4' href="/japanese/grammar/keigo">
          <img src={dart} width={80} height={80} alt="Grammar Icon"/>
          <div className='text-blue-500 underline'>
            Grammar
          </div>
        </a>
        <a className='flex flex-col items-center m-4' 
          href="/japanese/comprehension/aikos-book-sanctuary">
          <img src={learningKnowledge} width={80} height={80} 
            alt="Reading and Listening Comprehension Icon"/>
          <div className='text-center text-blue-500 underline'>
            Reading and Listening <br />Comprehension
          </div>
        </a>
      </div>
    </div>
  );
}
 
export default Japanese;
