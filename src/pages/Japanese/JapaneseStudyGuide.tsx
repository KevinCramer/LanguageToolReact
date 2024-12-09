import './Japanese.scss'
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes'
import { createURL } from '../../helpers/createURL';
import { languages as languagesVocab } from '../../data/structured-data/words';
import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useProtectedLink } from '../../helpers/use-protected-link';

const JapaneseStudyGuide = () => { 

  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email

  const handleProtectedClick = useProtectedLink();
  const japaneseVocab = (languagesVocab as any[]).find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => !topic.isAlphabet);
  });
  const clothesVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'clo')
  const coloursVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'col')
  const numbersVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'num')
  const animalsVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'animals')
  const bodyVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'body')
  const daysOfWeekVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'day')
  const foodsVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'food')
  const irregularAdjectivesVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'adj2')
  const locationVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'locations')
  const monthsOfYearVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'mon')
  const regularAdjectivesVocabTopic = japaneseVocab?.topics.find((t: any)=> t.slugName === 'adj1')

  const japaneseWritingSystems = (languagesVocab as any[]).find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => topic.isAlphabet);
  });

  const hiraganaBasicWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'hir')
  const hiraganaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'hirdak')
  const hiraganaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'hiryoon')
  const katakanaBasicWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'kat')
 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Japanese Study Guide</h4>
          <div>
            <b>Phase 1:</b> Spend a few minutes reading about <a href="/japanese/writing-systems-explained">Japanese writing systems</a>.
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 2:</b> Study <a href="/japanese/hiragana-explained">hiragana</a>. That includes mastering all: 
            <div style={{ display: 'flex' }}>
              <ul>
                <li>
                  <a onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.WritingSystem,
                        hiraganaBasicWritingSystem)
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                       46 basic hiragana
                    {hiraganaBasicWritingSystem?.isLocked &&
                     lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(hiraganaDakutenWritingSystem)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.WritingSystem,
                        hiraganaDakutenWritingSystem)
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >

                   25 hiragana with dakuten and han-dakuten
                    {hiraganaDakutenWritingSystem?.isLocked &&
                     lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(hiraganaYoonWritingSystem)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.WritingSystem,
                        hiraganaYoonWritingSystem)
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                      36 Hiragana Yōon combinations
                    {hiraganaYoonWritingSystem?.isLocked &&
                     lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 3:</b> Study <a href="/japanese/katakana-explained">katakana</a>.
             That includes mastering all:
            <ul>
              <li>
                <a onClick={handleProtectedClick(katakanaBasicWritingSystem)}
                  href={
                    createURL(
                      LanguageNames.Japanese,
                      LearningSections.WritingSystem,
                      katakanaBasicWritingSystem)
                  }>  
                    46 basic katakana
                  {katakanaBasicWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                </a>
              </li>
              <li>
                25 katakana with dakuten and han-dakuten
              </li>
              <li>
                36 katakana Yōon combinations
              </li>
            </ul>
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 4:</b> Study the vocabulary for these topics:
            <div style={{ display: 'flex' }}> 
              <ul>
                <li>
                  <a onClick={handleProtectedClick(clothesVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        clothesVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >                    
                    {clothesVocabTopic?.name.toLocaleLowerCase()}
                    {clothesVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  < a onClick={handleProtectedClick(coloursVocabTopic )}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        coloursVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {coloursVocabTopic?.name.toLocaleLowerCase()}
                    {coloursVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  < a onClick={handleProtectedClick(numbersVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        numbersVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {numbersVocabTopic?.name.toLocaleLowerCase()}
                    {numbersVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(animalsVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        animalsVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {animalsVocabTopic?.name.toLocaleLowerCase()}
                    {animalsVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  < a onClick={handleProtectedClick(bodyVocabTopic )}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        bodyVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {bodyVocabTopic?.name.toLocaleLowerCase()}
                    {bodyVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  < a onClick={handleProtectedClick(daysOfWeekVocabTopic )}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        daysOfWeekVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >              
                    {daysOfWeekVocabTopic?.name.toLocaleLowerCase()}
                    {daysOfWeekVocabTopic?.isLocked &&
                  lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  < a onClick={handleProtectedClick(foodsVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        foodsVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >    
                    {foodsVocabTopic?.name.toLocaleLowerCase()}
                    {foodsVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  < a onClick={handleProtectedClick(irregularAdjectivesVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        irregularAdjectivesVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >            
                    {irregularAdjectivesVocabTopic?.name.toLocaleLowerCase()}
                    {irregularAdjectivesVocabTopic?.isLocked && 
                  lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a> 
                </li>
                <li>
                  < a onClick={handleProtectedClick(locationVocabTopic)}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        locationVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {locationVocabTopic?.name.toLocaleLowerCase()}
                    {locationVocabTopic?.isLocked && 
                  lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a>
                </li>
                <li>
                  < a onClick={handleProtectedClick(monthsOfYearVocabTopic )}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        monthsOfYearVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {monthsOfYearVocabTopic?.name.toLocaleLowerCase()}
                    {monthsOfYearVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a> 
                </li>
                <li>
                  < a onClick={handleProtectedClick(regularAdjectivesVocabTopic )}
                    href={
                      createURL(
                        LanguageNames.Japanese,
                        LearningSections.Vocab,
                        regularAdjectivesVocabTopic
                      )
                    }
                    style={{ display:'flex',alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    {regularAdjectivesVocabTopic?.name.toLocaleLowerCase()}
                    {regularAdjectivesVocabTopic?.isLocked 
                  && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft: '5px' }}/> : ''}
                  </a> 
                </li>
              </ul>
            </div>
            We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 
          (If you get 90% or higher  for each quiz without studying the topic in the last 24 hours you are ready to move to phase 2).           </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 5:</b> practice <a href="/japanese/comprehension/aikos-book-sanctuary?eng=F">reading and listening comprehension</a>.
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 6:</b> learn <a href="/japanese/kanji-explained">kanji</a>.
          </div>
          <div style={{ height: '30px' }}></div>
          <i style={{ fontSize:'16px', paddingBottom: '30px' }}>
          The Japanese language has 130 million native speakers, with about 95% residing in Japan. 
          Over the past 40 years, the number of people learning Japanese as a second language has increased over twentyfold. 
          </i>
        </div>
      </div>
    </>
  );
}
 
export default JapaneseStudyGuide;
