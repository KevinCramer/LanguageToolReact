import './Japanese.scss'
import dictionary from '../../assets/dictionary.svg';
import pen from '../../assets/pen.svg';

const Japanese = () => { 
 
  return (
    <>
      <div className="japanese-container">
        <i>
        The Japanese language has 130 million native speakers, with 95% residing in Japan. Over the past 40 years, the number of people learning it as a second language has increased twentyfold.        </i>
        <div style={{ paddingTop: '20px' }}>
        At LingoCommand the Japanese study materials are divided into 2 main sections:
        </div>
        <div className="study-materials-div">
          <a href="/japanese/writing-systems" style={{ paddingLeft: '50px', paddingRight: '30px' }}>
            <img src={pen} width={100} height={100} alt="Writing Systems Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            < div style={{ textAlign: 'center' }}>
            Writing < br /> Systems
            </div>
          </a>
          <a href="/japanese/vocabulary" style={{ textAlign: 'center', margin: '10px' }}>
            <img src={dictionary} width={100} height={100} alt="Vocabulary Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div>Vocabulary</div>
          </a>
        </div>
        
      </div>
    </>
  );
}
 
export default Japanese;
