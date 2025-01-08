import { japaneseVocabTopicSlugNames, languages 
as languagesVocab } from '../../data/structured-data/words';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes'
import { lingoCommandIsLocked, lockIconStyle, protectedLinkStyle } from '../../constants';
import { createURL } from '../../helpers/createURL';
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
  const clothesVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.clothes)
  const coloursVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.colours)
  const numbersVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.numbers)
  const animalsVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.animals)
  const bodyVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.body)
  const daysOfWeekVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.daysOfWeek)
  const foodsVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.food)
  const irregularAdjectivesVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.irregularAdjectives)
  const locationVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.locations)
  const monthsOfYearVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.monthsOfYear)
  const regularAdjectivesVocabTopic = japaneseVocab
    ?.topics.find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.regularAdjectives)

  const japaneseWritingSystems = (languagesVocab as any[]).find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => topic.isAlphabet);
  });

  const hiraganaBasicWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.basicHiragana)
  const hiraganaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.hiraganaDakuten)
  const hiraganaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.hiraganaYoon)
  const katakanaBasicWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.basicKatakana)
  const katakanaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.katakanaDakuten)
  const katakanaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.katakanaYoon)
  const katakanaSpecialYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.katakanaSpecialYoon)
 
  return (
    <div className='max-w-screen-md mx-auto'>
      <h4 className='text-center text-2xl py-12'>
        Japanese Study Guide
      </h4>
      <div>
        <b>Phase 1:</b> Spend a few minutes reading about <a className= 'text-blue-500 underline' href='/japanese/writing-systems-explained'>Japanese writing systems</a>.
      </div>
      <div>
        <b>Phase 2:</b> Study <a className= 'text-blue-500 underline' href='/japanese/hiragana-explained'>hiragana</a>. That includes mastering all: 
        <div>
          <ul>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    hiraganaBasicWritingSystem)
                }
                style = {protectedLinkStyle}
              >
                       46 basic hiragana
                {hiraganaBasicWritingSystem?.isLocked &&
                     lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(hiraganaDakutenWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    hiraganaDakutenWritingSystem)
                }
                style = {protectedLinkStyle}
              >

                   25 hiragana with dakuten and handakuten
                {hiraganaDakutenWritingSystem?.isLocked &&
                     lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(hiraganaYoonWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    hiraganaYoonWritingSystem)
                }
                style = {protectedLinkStyle}
              >
                      36 Hiragana Yōon combinations
                {hiraganaYoonWritingSystem?.isLocked &&
                     lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <b>Phase 3:</b> Study <a className= 'text-blue-500 underline' href='/japanese/katakana-explained'>katakana</a>.
             That includes mastering all:
        <div>
          <ul>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(katakanaBasicWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaBasicWritingSystem)
                }
                style = {protectedLinkStyle}
              >  
                    46 basic katakana
                {katakanaBasicWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(katakanaDakutenWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaDakutenWritingSystem)
                }
                style = {protectedLinkStyle}
              >  
                    25 katakana with dakuten and handakuten
                {katakanaDakutenWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(katakanaYoonWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaYoonWritingSystem)
                }
                style = {protectedLinkStyle}
              >  
                    36 native katakana yōon combinations
                {katakanaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(katakanaSpecialYoonWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaSpecialYoonWritingSystem)
                }
                style = {protectedLinkStyle}
              >  
                    22 foreign katakana yōon combinations
                {katakanaSpecialYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <b>Phase 4:</b> Study <a className= 'text-blue-500 underline' href='/japanese/kanji-explained'>Introduction to Kanji</a>.
      </div>
      <div>
        <b>Phase 5:</b> Watch: <a className= 'text-blue-500 underline' href='/japanese/how-to-type-japanese'>How To Type Japanese</a>.
      </div>
      <div>
        <b>Phase 6:</b> Study the vocabulary for these topics:
        <div> 
          <ul>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(clothesVocabTopic)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    clothesVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >                    
                {clothesVocabTopic?.name.toLocaleLowerCase()}
                {clothesVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(coloursVocabTopic )}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    coloursVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >
                {coloursVocabTopic?.name.toLocaleLowerCase()}
                {coloursVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(numbersVocabTopic)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    numbersVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >
                {numbersVocabTopic?.name.toLocaleLowerCase()}
                {numbersVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(animalsVocabTopic)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    animalsVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >
                {animalsVocabTopic?.name.toLocaleLowerCase()}
                {animalsVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(bodyVocabTopic )}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    bodyVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >
                {bodyVocabTopic?.name.toLocaleLowerCase()}
                {bodyVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(daysOfWeekVocabTopic )}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    daysOfWeekVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >              
                {daysOfWeekVocabTopic?.name.toLocaleLowerCase()}
                {daysOfWeekVocabTopic?.isLocked &&
                  lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(foodsVocabTopic)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    foodsVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >    
                {foodsVocabTopic?.name.toLocaleLowerCase()}
                {foodsVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(irregularAdjectivesVocabTopic)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    irregularAdjectivesVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >            
                {irregularAdjectivesVocabTopic?.name.toLocaleLowerCase()}
                {irregularAdjectivesVocabTopic?.isLocked && 
                  lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a> 
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(locationVocabTopic)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    locationVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >
                {locationVocabTopic?.name.toLocaleLowerCase()}
                {locationVocabTopic?.isLocked && 
                  lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a>
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(monthsOfYearVocabTopic )}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    monthsOfYearVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >
                {monthsOfYearVocabTopic?.name.toLocaleLowerCase()}
                {monthsOfYearVocabTopic?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a> 
            </li>
            <li>
              <a className= 'text-blue-500 underline' onClick={handleProtectedClick(regularAdjectivesVocabTopic )}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.Vocab,
                    regularAdjectivesVocabTopic
                  )
                }
                style = {protectedLinkStyle}
              >
                {regularAdjectivesVocabTopic?.name.toLocaleLowerCase()}
                {regularAdjectivesVocabTopic?.isLocked 
                  && lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style = {lockIconStyle}/> : ''}
              </a> 
            </li>
          </ul>
        </div>
            We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 
          (If you get at least 90% on every quiz, without studying in the last 24 hours, you are ready to move to phase 7).           </div>
      <div>
        <b>Phase 7:</b> practice <a className= 'text-blue-500 underline' href='/japanese/comprehension/aikos-book-sanctuary?eng=F'>reading and listening comprehension</a>.
      </div>
      <div></div>
      <i>
          The Japanese language has 130 million native speakers, with about 95% residing in Japan. 
          Over the past 40 years, the number of people learning Japanese as a second language has increased over twentyfold. 
      </i>
    </div>
  );
}
 
export default JapaneseStudyGuide;
