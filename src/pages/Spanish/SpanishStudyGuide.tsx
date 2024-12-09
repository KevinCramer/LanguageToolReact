import './Spanish.scss'
import { languages as languagesGrammar } from '../../data/structured-data/grammar';
import { languages as languagesVocab } from '../../data/structured-data/words';
import LockIcon from '@mui/icons-material/Lock';
import { useProtectedLink } from '../../helpers/use-protected-link';
import { lingoCommandIsLocked } from '../../constants';
import { useAuth } from '../../contexts/AuthContext';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';

const SpanishStudyGuide = () => { 

  //@ts-ignore
  const { currentUser } = useAuth();
  
  const userIsLoggedIn = currentUser && currentUser.email
  const handleProtectedClick = useProtectedLink(); 

  const SpanishVocab = (languagesVocab as any[]).find(l => l.languageName === 'Spanish')
  ////
  const clothesVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'clo')
  const numbersVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'num')
  const foodVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'foo')
  const homeVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'hom')
  const bodyVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'bod')
  const locationsVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'loc')
  const coloursVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'col')
  //
  const pronounsVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'pro')
  const questionWordsVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'que')
  const conjunctionsVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'con')
  //
  const verbsVocabTopic = SpanishVocab?.topics.find((t: any)=> t.slugName === 'ver')

  const SpanishGrammar = (languagesGrammar as any[]).find(l => l.languageName === 'Spanish')
  ////
  const definiteArticleGrammarTopic = SpanishGrammar?.topics
    .find((t: any)=> t.slugName === 'definite-article')
  const indefiniteArticleGrammarTopic = SpanishGrammar?.topics
    .find((t: any)=> t.slugName === 'indefinite-article')
  const nounsGrammarTopic = SpanishGrammar?.topics.find((t: any)=> t.slugName === 'nouns')
  const adjectivesGrammarTopic = SpanishGrammar?.topics
    .find((t: any)=> t.slugName === 'adjectives')
  const verbsGrammarTopic = SpanishGrammar?.topics.find((t: any)=> t.slugName === 'verbs')

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Spanish Study Guide</h4>
          <div>
            <b>Phase 1:</b> Study the vocabulary for these topics:
            <div style={{ display:'flex' }}>
              <ul>
                <li>
                  <a onClick={handleProtectedClick(clothesVocabTopic)} 
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        clothesVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {clothesVocabTopic?.name.toLocaleLowerCase()}
                    {clothesVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon /> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(numbersVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        numbersVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {numbersVocabTopic?.name.toLocaleLowerCase()}
                    {numbersVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(bodyVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        bodyVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {bodyVocabTopic?.name.toLocaleLowerCase()}
                    {bodyVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(coloursVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        coloursVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {coloursVocabTopic?.name.toLocaleLowerCase()}
                    {coloursVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(foodVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        foodVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {foodVocabTopic?.name.toLocaleLowerCase()}
                    {foodVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(homeVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        homeVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {homeVocabTopic?.name.toLocaleLowerCase()}
                    {homeVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
              
                <li>
                  <a onClick={handleProtectedClick(locationsVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        locationsVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {locationsVocabTopic?.name.toLocaleLowerCase()}
                    {locationsVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
              </ul>
            </div>
            < br />We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 
          (If you get 90% or higher  for each quiz without studying the topic in the last 24 hours you are ready to move to phase 2). 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 2:</b> Study the vocabulary for these topics until you get 90% accuracy taking the quiz: 
            <div style={{ display:'flex' }}>
              <ul>  
                <li>
                  <a onClick={handleProtectedClick(conjunctionsVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        conjunctionsVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {conjunctionsVocabTopic?.name.toLocaleLowerCase()}
                    {conjunctionsVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(pronounsVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        pronounsVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {pronounsVocabTopic?.name.toLocaleLowerCase()}
                    {pronounsVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(questionWordsVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Vocab,
                        questionWordsVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {questionWordsVocabTopic?.name.toLocaleLowerCase()}
                    {questionWordsVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
              </ul>
            </div>
            < br /> Use same approach as phase 1. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 3:</b> Study the first five grammar lessons: 
            <div style={{ display:'flex' }}>
              <ol>
                <li>
                  <a onClick={handleProtectedClick(definiteArticleGrammarTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Grammar,
                        definiteArticleGrammarTopic,
                        true
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {definiteArticleGrammarTopic?.name.toLocaleLowerCase()}
                    {definiteArticleGrammarTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(indefiniteArticleGrammarTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Grammar,
                        indefiniteArticleGrammarTopic,
                        true
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {indefiniteArticleGrammarTopic?.name.toLocaleLowerCase()}
                    {indefiniteArticleGrammarTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> 
                    /*  line below is hack to ensure that locks are aligned to the right of grammar
                        topic with the longest name which is this 'indefinite article' topic.     */
                      : <LockIcon style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}/>}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(nounsGrammarTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Grammar,
                        nounsGrammarTopic,
                        true
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {nounsGrammarTopic?.name.toLocaleLowerCase()}
                    {nounsGrammarTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(adjectivesGrammarTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Grammar,
                        adjectivesGrammarTopic,
                        true
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {adjectivesGrammarTopic?.name.toLocaleLowerCase()}
                    {adjectivesGrammarTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(verbsGrammarTopic)}
                    href={
                      createURL(
                        LanguageNames.Spanish,
                        LearningSections.Grammar,
                        verbsGrammarTopic,
                        true
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {verbsGrammarTopic?.name.toLocaleLowerCase()}
                    {verbsGrammarTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
              </ol>
            </div>
          </div> 
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 4:</b> Spend 1/3rd of time learning <a onClick={handleProtectedClick(verbsVocabTopic)}
              href={
                createURL(
                  LanguageNames.Spanish,
                  LearningSections.Vocab,
                  verbsVocabTopic,
                  true
                )
              }>
              {verbsVocabTopic?.name.toLocaleLowerCase()}
              {verbsVocabTopic?.isLocked && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
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
