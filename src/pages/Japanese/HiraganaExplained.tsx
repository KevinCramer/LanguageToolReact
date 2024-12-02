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
              Dakuten and han-dakuten are little marks, called diacretics, you add to the hiragana characters to change their sounds. 
              Dakuten (゛) add a voiced sound, and han-dakuten (゜) create a “p” sound.
              For example, adding dakuten to “か” (ka) changes it to “が” (ga). 
              This has a significant effect on meanings and pronunciation, 
              so you need to know these.        
              There are <a href="/japanese/writing-systems?s=hirdak-T0TFT">25 hiragana with dakuten/han-dakuten pairs</a> to learn. 
            </div>

          </div>
          <div style={{ paddingTop:'10px' }}>
            <b>Yōon</b>
            <div>
              Some hiragana characters combine to make different sounds called Yōon. 
              When written out, the first character is its usual size, but the second is a little smaller.
              Combinations like “きゃ” (kya) and “しょ” (sho) are not just two separate sounds but a single, fluid syllable. 
              This blending is essential for words like “きょう” (today) and “しょうがっこう” (elementary school).
              There are  <a href="/japanese/writing-systems?s=hiryoon-T0TFT">36 hiragana Yōon combinations</a> to learn. 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default HiraganaExplained;
