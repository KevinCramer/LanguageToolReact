import './Spanish.scss'
import dart from '../../assets/dart.svg';
import dictionary from '../../assets/dictionary.svg';
import headphones from '../../assets/headphones.svg';
import upwardTrend from '../../assets/upward-trend.svg';

const Spanish = () => { 
 
  return (
    <>
      <div className="contact-us-container">
        <div>
        There are about 500 million native Spanish speakers, mainly in Spain and the Americas. Learning Spanish opens doors to new connections, cultures, and job opportunities.
        </div>
        <div>
          <div>
            <img src ={upwardTrend} width={100} height={100} alt="Grammar Icon"/>
          </div>
          <a href="/spanish/study-guide">
          Study Guide 
          </a>
          <div>
          This guide helps beginners learn Spanish and gain confidence in their skills. It also offers valuable content for advanced users.
          </div>
        </div>
        Alternatively, you can create your own study plan using the resources available. At LingoCommand the Spanish study materials are divided into three main sections:
        <div>

        </div>
        <div>
          <img src ={dictionary} width={100} height={100} alt="Grammar Icon"/>
        </div>
        <a href="/spanish/vocabulary">
          Vocabulary
        </a>
        <div>
          <img src ={dart} width={100} height={100} alt="Grammar Icon"/>
        </div>
        <a href="/spanish/grammar/definite-article">
          Grammar
        </a>
        <div>
          <img src ={headphones} width={100} height={100} alt="Listening Comprehension Icon"/>
        </div>
        <a href="/spanish/listening-comprehension/me-gusta-leer">
          Listening Comprehension
        </a>
      </div>
    </>
  );
}
 
export default Spanish;
