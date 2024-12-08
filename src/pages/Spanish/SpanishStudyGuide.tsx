import { useProtectedLink } from '../../helpers/use-protected-link';
import './Spanish.scss'

const SpanishStudyGuide = () => { 
  const handleProtectedClick = useProtectedLink(); 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Spanish Study Guide</h4>
          <div>
            <b>Phase 1:</b> Study the vocabulary for these topics:
            <ul>
              <li>
                <a href="/spanish/vocabulary?s=clo-T0TFT">clothes</a>
              </li>
              <li>
                <a href="/spanish/vocabulary?s=num-T0TFT">numbers</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=foo-T0TFT">food</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=hom-T0TFT">home</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=bod-T0TFT">body</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=loc-T0TFT">locations</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=col-T0TFT">colours</a>
              </li>
            </ul>

            < br />We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 
          (If you get 90% or higher  for each quiz without studying the topic in the last 24 hours you are ready to move to phase 2). 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 2:</b> Study the vocabulary for these topics until you get 90% accuracy taking the quiz: 
            <ul>  
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=pro-T0TFT">pronouns</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=que-T0TFT">question words</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/vocabulary?s=con-T0TFT">conjunctions</a>
              </li>
            </ul>
            < br /> Use same approach as phase 1. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 3:</b> Study the first five grammar lessons: 
            <b>Phase 3:</b> Study the first five grammar lessons: 
            <ol>
              <li>
                <a href="/spanish/grammar/definite-article">definite article</a>
              </li>
              <li>
                <a href="/spanish/grammar/indefinite-article">indefinite article</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/grammar/nouns">nouns</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/grammar/adjectives">adjectives</a>
              </li>
              <li>
                <a onClick={handleProtectedClick} href="/spanish/grammar/verbs">verbs</a>
              </li>
            </ol>
          </div> 
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 4:</b> Spend 1/3rd of time learning <a href="/spanish/vocabulary?s=ver-T0TFT">verbs</a>, 1/3 of time learning <a href="/spanish/vocabulary?s=clo-T0TFT">vocabulary</a>, 1/3 of time doing <a href="/spanish/comprehension/shopping-for-family-meals?eng=F&L=WritingSystem1&R=English">reading and listening comprehension</a>.
          </div> 
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 5:</b> As proficiency improves continue to further prioritise <a href="/spanish/comprehension/shopping-for-family-meals?eng=F&L=WritingSystem1&R=English">reading and listening comprehension</a> until at one point you spend maybe 80% of your time doing that. 
          </div>
          <div style={{ height: '100px' }}></div>
          <i style={{ fontSize:'16px' }}>
        There are about 500 million native Spanish speakers, mainly in Spain and the Americas. Learning Spanish opens doors to new connections, cultures, and job opportunities.
          </i>
        </div>
      </div>
    </>
  );
}
 
export default SpanishStudyGuide;
