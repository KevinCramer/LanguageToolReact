import { useProtectedLink } from '../../helpers/use-protected-link';
import './Japanese.scss'

const JapaneseStudyGuide = () => { 
  const handleProtectedClick = useProtectedLink();
 
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
              1. <a href="/japanese/writing-systems?s=hir-T0TFT"> 46 basic hiragana</a>
            </div>
            <div>
              2. <a onClick={handleProtectedClick} href="/japanese/writing-systems?s=hirdak-T0TFT"> 25 hiragana with dakuten and han-dakuten</a>
            </div>
            <div>
              3. <a onClick={handleProtectedClick} href="/japanese/writing-systems?s=hiryoon-T0TFT">36 Hiragana Yōon combinations</a>.
            </div>
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 3:</b> Study <a href="/japanese/katakana-explained">katakana</a>. That includes mastering all:
            <div>
              1. <a href="/japanese/writing-systems?s=kat-T0TFT"> 46 basic katakana</a>
            </div>
            <div>
              2. 25 katakana with dakuten and han-dakuten
            </div>
            <div>
              3. 36 katakaan Yōon combinations
            </div>
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 4:</b> Study the vocabulary for these topics: <a href="/japanese/vocabulary?s=clo-T0TFT">clothes</a>, <a href="/japanese/vocabulary?s=num-T0TFT">numbers</a>, <a href="/japanese/vocabulary?s=col-T0TFT">colours</a>, <a onClick={handleProtectedClick} href="/japanese/vocabulary?s=foo-T0TFT">food</a>, <a onClick={handleProtectedClick} href="/japanese/vocabulary?s=bod-T0TFT">body</a>, <a onClick={handleProtectedClick} href="/japanese/vocabulary?s=loc-T0TFT">locations</a>, <a onClick={handleProtectedClick} href="/japanese/vocabulary?s=ani-T0TFT">animals</a>, <a onClick={handleProtectedClick} href="/japanese/vocabulary?s=day-T0TFT">days of the week</a>, <a onClick={handleProtectedClick} href="/japanese/vocabulary?s=mon-T0TFT">months of the year</a>. 
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
