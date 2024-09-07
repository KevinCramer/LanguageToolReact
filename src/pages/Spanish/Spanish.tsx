import './Spanish.scss'
import dart from '../../assets/dart.svg';
import dictionary from '../../assets/dictionary.svg';
import headphones from '../../assets/headphones.svg';
import upwardTrend from '../../assets/upward-trend.svg';

const Spanish = () => { 
 
  return (
    <>
      <div className="spanish-container">
        <div>
        There are about 500 million native Spanish speakers, mainly in Spain and the Americas. Learning Spanish opens doors to new connections, cultures, and job opportunities.
        </div>
        <div>
          
          <div style={{ paddingTop:'30px' }}>
          This guide helps beginners learn Spanish and gain confidence in their skills. It also offers valuable content for advanced users.
          </div>
          <div style={{ textAlign: 'center', paddingTop: '30px' }}>
            <div>
              <img src={upwardTrend} width={100} height={100} alt="Study Guide Icon" />
            </div>
            <a href="/spanish/study-guide">Study Guide</a>
          </div>
        </div>
        <div style={{ paddingTop:'30px' }}>
        Alternatively, you can create your own study plan using the resources available. At LingoCommand the Spanish study materials are divided into three main sections:
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            <img src={dictionary} width={100} height={100} alt="Grammar Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <a href="/spanish/vocabulary">Vocabulary</a>
          </div>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            <img src={dart} width={100} height={100} alt="Grammar Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <a href="/spanish/grammar/definite-article">Grammar</a>
          </div>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            <img src={headphones} width={100} height={100} alt="Listening Comprehension Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <a href="/spanish/listening-comprehension/me-gusta-leer">Listening <br />Comprehension</a>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Spanish;
