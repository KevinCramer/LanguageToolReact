import dictionary from '../../assets/dictionary.svg';
import dart from '../../assets/dart.svg';
import learningKnowledge from '../../assets/learningKnowledge.svg';
import pen from '../../assets/pen.svg';
import upwardTrend from '../../assets/upward-trend.svg';

const Japanese = () => { 
 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4> Learn Japanese</h4>

          <div>
        LingoCommand helps beginners learn Japanese and gain confidence in their skills. We also offer valuable content for advanced users. Try our study guide below:
          </div>
          <div className="study-materials-div">
            <a href="/japanese/study-guide">
              <img src={upwardTrend} width={80} height={80} alt="Study Guide Icon"/>
              < div>
            Study Guide
              </div>
            </a>
          </div>
          <div>
        Alternatively, you can create your own study plan using the resources available at LingoCommand. The Japanese study materials are divided into four main sections:
          </div>
          <div className="study-materials-div">
            <a href="/japanese/writing-systems-explained">
              <img src={pen} width={80} height={80} alt="Writing Systems Icon"/>
              < div>
            Writing Systems < br />  (Alphabets)
              </div>
            </a>
            <a href="/japanese/vocabulary">
              <img src={dictionary} width={80} height={80} alt="Vocabulary Icon"/>
              <div>Vocabulary</div>
            </a>

            <a href="/japanese/grammar/keigo">
              <img src={dart} width={80} height={80} alt="Grammar Icon"/>
              <div >Grammar</div>
            </a>
            <a href="/japanese/comprehension/aikos-book-sanctuary">
              <img src={learningKnowledge} width={80} height={80} alt="Reading and Listening Comprehension Icon"/>
              <div>Reading and Listening <br />Comprehension</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Japanese;
