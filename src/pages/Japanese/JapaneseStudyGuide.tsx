import './Japanese.scss'

const JapaneseStudyGuide = () => { 
 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Japanese Study Guide</h4>
          <div>
            <b>Phase 1:</b> Spend a few minutes reading about Japanese writing systems <a href="/japanese/writing-systems-explanation">here</a> 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 2:</b> Master <a href="/japanese/writing-systems?s=hir-T0TFT">hiragana</a> and <a href="/japanese/writing-systems?s=kat-T0TFT">katakana</a>. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 3:</b> Study the vocabulary for these topics: <a href="/japanese/vocabulary?s=clo-T0TFT">clothes</a>, <a href="/japanese/vocabulary?s=num-T0TFT">numbers</a>, <a href="/japanese/vocabulary?s=col-T0TFT">colours</a>, <a href="/japanese/vocabulary?s=foo-T0TFT">food</a>, <a href="/japanese/vocabulary?s=bod-T0TFT">body</a>, <a href="/japanese/vocabulary?s=loc-T0TFT">locations</a>, <a href="/japanese/vocabulary?s=ani-T0TFT">animals</a>, <a href="/japanese/vocabulary?s=day-T0TFT">days of the week</a>, <a href="/japanese/vocabulary?s=mon-T0TFT">months of the year</a>. 
            We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 
          (If you get 90% or higher  for each quiz without studying the topic in the last 24 hours you are ready to move to phase 2).           </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 4:</b> practice <a href="/japanese/comprehension/aikos-book-sanctuary?eng=F">reading and listening comprehension</a>.
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 5:</b> learn <a href="/japanese/writing-systems?s=kanji_grade1-T0TFT">first grade kanji</a>.
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
