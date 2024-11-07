import './Spanish.scss'
import dart from '../../assets/dart.svg';
import dictionary from '../../assets/dictionary.svg';
import learningKnowledge from '../../assets/learningKnowledge.svg';
import upwardTrend from '../../assets/upward-trend.svg';

const Spanish = () => { 
 
  return (
    <>
      <div className="spanish-container">
        <div>
          <h4> Spanish</h4>
          <div>
          LingoCommand helps beginners learn Spanish and gain confidence in their skills. We also offer valuable content for advanced users. Try our study guide below:
          </div>
          <div className="study-materials-div">
            <a href="/spanish/study-guide" 
              style={{ textAlign: 'center', paddingLeft: '20px' }}>
              <img src={upwardTrend} width={80} height={80} alt="Study Guide Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
              <div>Study Guide</div>
            </a>
          </div>
        </div>
        <div style={{ paddingTop:'30px' }}>
        Alternatively, you can create your own study plan using the resources available at LingoCommand. The Spanish study materials are divided into three main sections:
        </div>
        <div className="study-materials-div">
          <a href="/spanish/vocabulary" style={{ textAlign: 'center', margin: '10px', paddingRight: '60px', paddingLeft: '20px' }}>
            <img src={dictionary} width={80} height={80} alt="Vocabulary Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div >Vocabulary</div>
          </a>
          <a href="/spanish/grammar/definite-article" style={{ textAlign: 'center', margin: '10px', paddingRight: '60px' }}>
            <img src={dart} width={80} height={80} alt="Grammar Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div >Grammar</div>
          </a>
          <a href="/spanish/listening-comprehension/me-gusta-leer"style={{ textAlign: 'center', margin: '10px' }}>
            <img src={learningKnowledge} width={80} height={80} alt="Reading and Listening Comprehension Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div>Reading and Listening <br />Comprehension</div>
          </a>
        </div>
      </div>
    </>
  );
}
 
export default Spanish;
