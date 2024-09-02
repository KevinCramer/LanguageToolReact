import './Spanish.scss'
import dart from '../../assets/dart.svg';
import dictionary from '../../assets/dictionary.svg';
import headphones from '../../assets/headphones.svg';

const SpanishStudyGuide = () => { 
 
  return (
    <>
      <div className="contact-us-container">
        <div>
        Phase 1: Study the vocabulary for these topics: clothes, numbers, colours, food, home, body, locations. We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 

(If you get 90% or higher  for each quiz without studying the topic in the last 24 hours you are ready to move to phase 2). 

Phase 2: Study the vocabulary for these topics until you get 90% accuracy taking the quiz: pronouns, question words, conjunctions. Use same approach as phase 1. 

Phase 3: Study the grammar lessons 1 through 5. 

Phase 4: Spend 1/3rd of time learning verbs, 1/3 of time learning new vocab, 1/3 of time doing immersion. 

Phase 5: As proficiency improves continue to further prioritise immersion, until at one point you spend maybe 80% of your time on immersion. 
        </div>
      </div>
    </>
  );
}
 
export default SpanishStudyGuide;
