import './Japanese.scss'
import dictionary from '../../assets/dictionary.svg';
import pen from '../../assets/pen.svg';

const Japanese = () => { 
 
  return (
    <>
      <div className="japanese-container">
        <h4> Japanese</h4>
        <div style={{ paddingTop: '20px' }}>
        At LingoCommand the Japanese study materials are divided into 2 main sections:
        </div>
        <div className="study-materials-div">
          <a href="/japanese/writing-systems" style={{ paddingLeft: '50px', paddingRight: '30px' }}>
            <img src={pen} width={80} height={80} alt="Writing Systems Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            < div style={{ textAlign: 'center' }}>
            Writing < br /> Systems
            </div>
          </a>
          <a href="/japanese/vocabulary" style={{ textAlign: 'center', margin: '10px' }}>
            <img src={dictionary} width={80} height={80} alt="Vocabulary Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <div>Vocabulary</div>
          </a>
        </div>
        <i style={{ fontSize:'16px', paddingTop: '30px' }}>
          The Japanese language has 130 million native speakers, with about 95% residing in Japan. 
          Over the past 40 years, the number of people learning Japanese as a second language has increased over twentyfold. 
        </i>
        
      </div>
    </>
  );
}
 
export default Japanese;
