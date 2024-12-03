import './Japanese.scss'

const HiraganaExplained = () => { 
 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Hiragana Explained</h4>
          <div>
          Learning hiragana is the first step to learning japanese. By learning hiragana you will learn the basics of Japanese pronunciation. 
          </div>
          <div style={{ paddingTop:'10px' }}>
            <b>Basic Hiragana</b>
            <div>
              Hiragana has <a href="/japanese/writing-systems?s=hir-T0TFT">46 basic sounds</a>.
            </div>
          </div>
          <div style={{ paddingTop:'10px' }}>
            <b>Hiragana with Dakuten and Han-Dakuten</b>
            <div>
            Dakuten (゛) and han-dakuten (゜) are marks added on top of hiragana that alter pronunciation.
            Dakuten add a <i>voiced</i> sound. For example: <b>か (ka) → が (ga)</b>. <br></br> 
            Han-dakuten create a "p" sound. For example: <b>は (ha) → ぱ (pa)</b>. <br></br> 
            Mastering these <a href="/japanese/writing-systems?s=hirdak-T0TFT">25 hiragana variations</a> is essential for accurate pronunciation and meaning.       
            </div>

          </div>
          <div style={{ paddingTop:'10px' }}>
            <b>Yōon</b>
            <div>
              Some hiragana combine to form Yōon sounds. In these combinations,
              the first character remains full-sized, while the second is smaller.
              Examples like “きゃ” (kya) and “しょ” (sho) represent single, blended 
              syllables rather than separate sounds. This blending is crucial in words 
              like “きょう” (kyou, today) and “しょうがっこう” (shougakkou, elementary school). 
              There are <a href="/japanese/writing-systems?s=hiryoon-T0TFT">36 Yōon combinations</a> to learn. 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default HiraganaExplained;
