import './Japanese.scss'

const HiraganaExplained = () => { 
 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Hiragana Explained</h4>
          <div>
          Learning hiragana is the first step to learning japanese. By learning all 3 concepts below you will learn the basics of Japanese pronunciation. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Basic Hiragana</b>  has <a href="/japanese/writing-systems?s=hir-T0TFT">46 sounds</a>.
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Dakuten and Han-Dakuten</b> create another <a href="/japanese/writing-systems?s=hirdak-T0TFT">25 hiragana variations</a>. <br></br>
            Dakuten and han-dakuten are marks added on top of hiragana that alter pronunciation. 
            <div style={{ height: '0px' }}>

            </div>
            The dakuten mark is <b>( ゛)</b>. It adds a <i>voiced</i> sound. There are 20 dakuten variations. <br></br>
            For example: <b>か (ka) → が (ga)</b>. <br></br> 
            <div style={{ height: '0px' }}>

            </div>
            The han-dakuten mark is <b>( ゜)</b>. It creates a  "p" sound. There are 5 variations. <br></br> For example: <b>は (ha) → ぱ (pa)</b>.
            <div style={{ height: '20px' }}>

            </div>      
          </div>
          <div style={{ paddingTop:'0px' }}>
            <b>Yōon</b>  creates another <a href="/japanese/writing-systems?s=hiryoon-T0TFT">36 combinations</a>. <div></div>
            Some hiragana combine to form Yōon sounds. In these combinations,
              the first character remains full-sized, while the second is smaller.
              Examples like <b>きゃ(kya) </b>and <b>しょ(sho)</b> represent single, blended 
              syllables rather than separate sounds. This blending is crucial in words 
              like <br></br><b>きょう(kyou, today)</b> and <b>しょうがっこう(shougakkou, elementary school)</b>. 
          </div>
        </div>
      </div>
    </>
  );
}
 
export default HiraganaExplained;
