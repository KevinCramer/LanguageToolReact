import './Japanese.scss'

const JapaneseStudyGuide = () => { 
 
  return (
    <>
      <div className="spanish-container">
        <div>
          <b>Phase 1:</b> learn <a href="/japanese/vocabulary?s=hir-T0TFT">hiragana</a>,and <a href="/japanese/vocabulary?s=kat-T0TFT">katakana</a>. 
        </div>
        <div style={{ paddingTop:'20px' }}>
          <b>Phase 2:</b> learn <a href="/japanese/vocabulary?s=kanji_grade1-T0TFT">kanji</a>.
        </div>
        <i style={{ fontSize:'16px', paddingTop: '30px', paddingBottom: '30px' }}>
          The Japanese language has 130 million native speakers, with about 95% residing in Japan. 
          Over the past 40 years, the number of people learning Japanese as a second language has increased over twentyfold. 
        </i>
      </div>
      
    </>
  );
}
 
export default JapaneseStudyGuide;
