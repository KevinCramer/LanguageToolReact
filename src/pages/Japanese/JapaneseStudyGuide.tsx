import './Japanese.scss'

const JapaneseStudyGuide = () => { 
 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Japanese Study Guide</h4>
          <div>
            <b>Phase 1:</b> learn <a href="/japanese/writing-systems?s=hir-T0TFT">hiragana</a>,and <a href="/japanese/writing-systems?s=kat-T0TFT">katakana</a>. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Phase 2:</b> learn <a href="/japanese/writing-systems?s=kanji_grade1-T0TFT">kanji</a>.
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
