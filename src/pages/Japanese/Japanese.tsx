import './Japanese.scss'
import dictionary from '../../assets/dictionary.svg';
import pen from '../../assets/pen.svg';

const Japanese = () => { 
 
  return (
    <>
      <div className="japanese-container">
        <div>
         The Japanese language has 130 million native speakers with about 95% of them living in Japan. The language is known for its levels of politeness and formality, which affect word choice and sentence structure. 
        </div>
        <div style={{ paddingTop: '20px' }}>
        At LingoCommand the Japanese study materials are divided into 2 main sections:
        </div>
        <div className="study-materials-div">
          <div>
            <img src={pen} width={100} height={100} alt="Writing Systems Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <a href="/japanese/writing-systems" style={{ textAlign: 'center' }}>
            Writing < br /> Systems
            </a>
          </div>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            <img src={dictionary} width={100} height={100} alt="Vocabulary Icon" style={{ display: 'block', margin: '0 auto 10px' }} />
            <a href="/japanese/vocabulary">Vocabulary</a>
          </div>
        </div>
        
      </div>
    </>
  );
}
 
export default Japanese;
