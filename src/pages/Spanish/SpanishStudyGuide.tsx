import './Spanish.scss'
import { languages as languagesGrammar } from '../../data/structured-data/grammar';
import { languages as languagesVocab } from '../../data/structured-data/words';
import LockIcon from '@mui/icons-material/Lock';
import { useProtectedLink } from '../../helpers/use-protected-link';

const SpanishStudyGuide = () => { 
  const handleProtectedClick = useProtectedLink(); 

  const SpanishVocab = languagesVocab.find(l => l.languageName === 'Spanish')
  ////
  const clothesVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'clo')
  const numbersVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'num')
  const foodVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'foo')
  const homeVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'hom')
  const bodyVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'bod')
  const locationsVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'loc')
  const coloursVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'col')
  //
  const pronounsVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'pro')
  const questionWordsVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'que')
  const conjunctionsVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'con')
  //
  const verbsVocabTopic = SpanishVocab?.topics.find(t => t.slugName === 'ver')

  const SpanishGrammar = languagesGrammar.find(l => l.languageName === 'Spanish')
  ////
  const definiteArticleGrammarTopic = SpanishGrammar?.topics
    .find(t => t.slugName === 'definite-article')
  const indefiniteArticleGrammarTopic = SpanishGrammar?.topics
    .find(t => t.slugName === 'indefinite-article')
  const nounsGrammarTopic = SpanishGrammar?.topics.find(t => t.slugName === 'nouns')
  const adjectivesGrammarTopic = SpanishGrammar?.topics
    .find(t => t.slugName === 'adjectives')
  const verbsGrammarTopic = SpanishGrammar?.topics.find(t => t.slugName === 'verbs')

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Spanish Study Guide</h4>
          <div>
            <b>Phase 1:</b> Study the vocabulary for these topics:
            <ul>
              <li>
                <a onClick={handleProtectedClick(clothesVocabTopic)} 
                  href="/spanish/vocabulary?s=clo-T0TFT">
                  {clothesVocabTopic?.name.toLocaleLowerCase()}
                  {clothesVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(numbersVocabTopic)}
                  href="/spanish/vocabulary?s=num-T0TFT">
                  {numbersVocabTopic?.name.toLocaleLowerCase()}
                  {numbersVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(bodyVocabTopic)}
                  href="/spanish/vocabulary?s=bod-T0TFT">
                  {bodyVocabTopic?.name.toLocaleLowerCase()}
                  {bodyVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(coloursVocabTopic)}
                  href="/spanish/vocabulary?s=col-T0TFT">
                  {coloursVocabTopic?.name.toLocaleLowerCase()}
                  {coloursVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(foodVocabTopic)}
                  href="/spanish/vocabulary?s=foo-T0TFT">
                  {foodVocabTopic?.name.toLocaleLowerCase()}
                  {foodVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(homeVocabTopic)}
                  href="/spanish/vocabulary?s=hom-T0TFT">
                  {homeVocabTopic?.name.toLocaleLowerCase()}
                  {homeVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              
              <li>
                <a onClick={handleProtectedClick(locationsVocabTopic)}
                  href="/spanish/vocabulary?s=loc-T0TFT">
                  {locationsVocabTopic?.name.toLocaleLowerCase()}
                  {locationsVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
             
            </ul>

            < br />We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 
          (If you get 90% or higher  for each quiz without studying the topic in the last 24 hours you are ready to move to phase 2). 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 2:</b> Study the vocabulary for these topics until you get 90% accuracy taking the quiz: 
            <ul>  
              <li>
                <a onClick={handleProtectedClick(conjunctionsVocabTopic)}
                  href="/spanish/vocabulary?s=con-T0TFT">
                  {conjunctionsVocabTopic?.name.toLocaleLowerCase()}
                  {conjunctionsVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(pronounsVocabTopic)}
                  href="/spanish/vocabulary?s=pro-T0TFT">
                  {pronounsVocabTopic?.name.toLocaleLowerCase()}
                  {pronounsVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(questionWordsVocabTopic)}
                  href="/spanish/vocabulary?s=que-T0TFT">
                  {questionWordsVocabTopic?.name.toLocaleLowerCase()}
                  {questionWordsVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
            </ul>
            < br /> Use same approach as phase 1. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 3:</b> Study the first five grammar lessons: 
            <ol>
              <li>
                <a onClick={handleProtectedClick(definiteArticleGrammarTopic)}
                  href="/spanish/grammar/definite-article">
                  {definiteArticleGrammarTopic?.name.toLocaleLowerCase()}
                  {definiteArticleGrammarTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(indefiniteArticleGrammarTopic)}
                  href="/spanish/grammar/indefinite-article">
                  {indefiniteArticleGrammarTopic?.name.toLocaleLowerCase()}
                  {indefiniteArticleGrammarTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(nounsGrammarTopic)}
                  href="/spanish/grammar/nouns">
                  {nounsGrammarTopic?.name.toLocaleLowerCase()}
                  {nounsGrammarTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(adjectivesGrammarTopic)}
                  href="/spanish/grammar/adjectives">
                  {adjectivesGrammarTopic?.name.toLocaleLowerCase()}
                  {adjectivesGrammarTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(verbsGrammarTopic)}
                  href="/spanish/grammar/verbs">
                  {verbsGrammarTopic?.name.toLocaleLowerCase()}
                  {verbsGrammarTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
            </ol>
          </div> 
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 4:</b> Spend 1/3rd of time learning 
            <a onClick={handleProtectedClick(verbsVocabTopic)}
              href="/spanish/vocabulary?s=ver-T0TFT">
              {verbsVocabTopic?.name.toLocaleLowerCase()}
              {verbsVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
            </a>,
             1/3 of time learning <a href="/spanish/vocabulary?s=clo-T0TFT">vocabulary</a>, 1/3 of time doing <a href="/spanish/comprehension/shopping-for-family-meals?eng=F&L=WritingSystem1&R=English">reading and listening comprehension</a>.
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
