import './Spanish.scss'
import dart from '../../assets/dart.svg';
import dictionary from '../../assets/dictionary.png';
import headphones from '../../assets/headphones.svg';

const Spanish = () => { 
 
  return (
    <>
      <div className="contact-us-container">
        <div>
        The Spanish language has about 500 million native speakers, mainly in the Americas and Spain. Learning it opens doors to new connections, cultures, and job opportunities.
        </div>
        <div>
          <a href="/spanish/study-plan">
          Study Guide 
          </a>
          This guide helps beginners quickly learn Spanish and build confidence in speaking, whilst also offering plenty of valuable content for more advanced users.
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
          <img src ={headphones} width={150} height={100} alt="Listening Comprehension Icon"/>
        </div>
        <a href="/spanish/listening-comprehension/me-gusta-leer">
          Listening Comprehension
        </a>
      </div>
    </>
  );
}
 
export default Spanish;
