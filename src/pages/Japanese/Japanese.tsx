import './Japanese.scss'
import dictionary from '../../assets/dictionary.svg';
import dart from '../../assets/dart.svg';
import headphones from '../../assets/headphones.svg';

import pen from '../../assets/pen.svg';
import upwardTrend from '../../assets/upward-trend.svg';

const Japanese = () => { 
 
  return (
    <>
      <div className="japanese-container">
        <h4> Japanese</h4>
        <div style={{ paddingTop: '20px' }}>
        LingoCommand helps beginners learn Japanese and gain confidence in their skills. We also offer valuable content for advanced users. Try our study guide below:
        </div>
        <div className="study-materials-div">
          <a href="/japanese/study-guide" style={{ paddingLeft: '50px', paddingRight: '30px' }}>
            <img src={upwardTrend} width={80} height={80} alt="Study Guide Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            < div style={{ textAlign: 'center' }}>
            Study Guide
            </div>
          </a>
        </div>
        <div style={{ paddingTop: '20px' }}>
        Alternatively, you can create your own study plan using the resources available at LingoCommand. The Japanese study materials are divided into two main sections:
        </div>
        <div className="study-materials-div">
          <a href="/japanese/writing-systems" style={{ paddingLeft: '50px', paddingRight: '30px' }}>
            <img src={pen} width={80} height={80} alt="Writing Systems Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            < div style={{ textAlign: 'center' }}>
            Writing < br /> Systems
            </div>
          </a>
          <a href="/japanese/vocabulary" style={{ textAlign: 'center', margin: '10px', paddingRight: '30px' }}>
            <img src={dictionary} width={80} height={80} alt="Vocabulary Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div>Vocabulary</div>
          </a>

          <a href="/japanese/grammar/definite-article" style={{ textAlign: 'center', margin: '10px', paddingRight: '30px' }}>
            <img src={dart} width={80} height={80} alt="Grammar Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div >Grammar</div>
          </a>
          <a href="/japanese/listening-comprehension/me-gusta-leer"style={{ textAlign: 'center', margin: '10px' }}>
            <img src={headphones} width={80} height={80} alt="Listening Comprehension Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div>Listening <br />Comprehension</div>
          </a>
        </div>
        <i style={{ fontSize:'16px', paddingTop: '30px', paddingBottom: '30px' }}>
          The Japanese language has 130 million native speakers, with about 95% residing in Japan. 
          Over the past 40 years, the number of people learning Japanese as a second language has increased over twentyfold. 
        </i>

      </div>
    </>
  );
}
 
export default Japanese;
