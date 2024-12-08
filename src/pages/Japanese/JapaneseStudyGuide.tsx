import './Japanese.scss'

import { languages as allLanguages } from '../../data/structured-data/words';
import LockIcon from '@mui/icons-material/Lock';
import { useProtectedLink } from '../../helpers/use-protected-link';

const JapaneseStudyGuide = () => { 
  const handleProtectedClick = useProtectedLink();
  const japaneseVocab = allLanguages.find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => !topic.isAlphabet);
  });
  const clothesVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'clo')
  const coloursVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'col')
  const numbersVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'num')
  const animalsVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'animals')
  const bodyVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'body')
  const daysOfWeekVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'day')
  const foodsVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'food')
  const irregularAdjectivesVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'adj2')
  const locationVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'locations')
  const monthsOfYearVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'mon')
  const regularAdjectivesVocabTopic = (japaneseVocab?.topics || []).find(t => t.slugName === 'adj1')

  const japaneseWritingSystems = allLanguages.find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => topic.isAlphabet);
  });

  const hiraganaBasicWritingSystem = (japaneseWritingSystems?.topics || []).find(t => t.slugName === 'hir')
  const hiraganaDakutenWritingSystem = (japaneseWritingSystems?.topics || []).find(t => t.slugName === 'hirdak')
  const hiraganaYoonWritingSystem = (japaneseWritingSystems?.topics || []).find(t => t.slugName === 'hiryoon')
  const katakanaBasicWritingSystem = (japaneseWritingSystems?.topics || []).find(t => t.slugName === 'kat')
 
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
            <div>
              <ul>
                <li>
                  <a onClick={handleProtectedClick(hiraganaBasicWritingSystem)}href="/japanese/writing-systems?s=hir-T0TFT"> 46 basic hiragana</a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(hiraganaDakutenWritingSystem)} href="/japanese/writing-systems?s=hirdak-T0TFT">
                   25 hiragana with dakuten and han-dakuten
                    {hiraganaDakutenWritingSystem?.isLocked ? <LockIcon></LockIcon> : ''}
                  </a>
                </li>
                <li>
                  <a onClick={handleProtectedClick(hiraganaYoonWritingSystem)} href="/japanese/writing-systems?s=hiryoon-T0TFT">
                  36 Hiragana Yōon combinations
                    {hiraganaYoonWritingSystem?.isLocked ? <LockIcon></LockIcon> : ''}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 3:</b> Study <a href="/japanese/katakana-explained">katakana</a>. That includes mastering all:
            <ul>
              <li>
                <a onClick={handleProtectedClick(katakanaBasicWritingSystem)}href="/japanese/writing-systems?s=kat-T0TFT">
                46 basic katakana
                  {katakanaBasicWritingSystem?.isLocked ? <LockIcon></LockIcon> : ''}
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
            <ul>
              <li>
                <a onClick={handleProtectedClick(clothesVocabTopic)}
                  href="/japanese/vocabulary?s=clo-T0TFT">
                  {clothesVocabTopic?.name.toLocaleLowerCase()}{clothesVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                < a onClick={handleProtectedClick(coloursVocabTopic )} href="/japanese/vocabulary?s=col-T0TFT">
                  {coloursVocabTopic?.name.toLocaleLowerCase()}{coloursVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                < a onClick={handleProtectedClick(numbersVocabTopic)} href="/japanese/vocabulary?s=num-T0TFT">
                  {numbersVocabTopic?.name.toLocaleLowerCase()}{numbersVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                <a onClick={handleProtectedClick(animalsVocabTopic)}
                  href="/japanese/vocabulary?s=ani-T0TFT">
                  {animalsVocabTopic?.name.toLocaleLowerCase()}{animalsVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                < a onClick={handleProtectedClick(bodyVocabTopic )} href="/japanese/vocabulary?s=bod-T0TFT">
                  {bodyVocabTopic?.name.toLocaleLowerCase()}{bodyVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                < a onClick={handleProtectedClick(daysOfWeekVocabTopic )} href="/japanese/vocabulary?s=day-T0TFT">
                  {daysOfWeekVocabTopic?.name.toLocaleLowerCase()}{daysOfWeekVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                < a onClick={handleProtectedClick(foodsVocabTopic)} href="/japanese/vocabulary?s=foo-T0TFT">
                  {foodsVocabTopic?.name.toLocaleLowerCase()}{foodsVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                < a onClick={handleProtectedClick(irregularAdjectivesVocabTopic)} href="/japanese/vocabulary?s=adj2-T0TFT">
                  {irregularAdjectivesVocabTopic?.name.toLocaleLowerCase()}{irregularAdjectivesVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a> 
              </li>
              <li>
                < a onClick={handleProtectedClick(locationVocabTopic)} href="/japanese/vocabulary?s=loc-T0TFT">
                  {locationVocabTopic?.name.toLocaleLowerCase()}{locationVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a>
              </li>
              <li>
                < a onClick={handleProtectedClick(monthsOfYearVocabTopic )} href="/japanese/vocabulary?s=mon-T0TFT">
                  {monthsOfYearVocabTopic?.name.toLocaleLowerCase()}{monthsOfYearVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a> 
              </li>
              <li>
                < a onClick={handleProtectedClick(regularAdjectivesVocabTopic )} href="/japanese/vocabulary?s=adj1-T0TFT">
                  {regularAdjectivesVocabTopic?.name.toLocaleLowerCase()}{regularAdjectivesVocabTopic?.isLocked ? <LockIcon></LockIcon> : ''}
                </a> 
              </li>
            </ul>

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
