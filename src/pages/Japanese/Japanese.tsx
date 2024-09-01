import './Japanese.scss'

const Japanese = () => { 
 
  return (
    <>
      <div className="japanese-container">
        <div>
          The Japanese language has 3 writing systems:
        </div>
        <div style={{ paddingLeft: '20px', paddingTop:'10px' }}>
          <a href="/japanese/vocabulary?s=hir-T0TFT">Hiragana</a> - a phonetic alphabet used for native japanese words. (It has 46 characters)
        </div>
        <div style={{ paddingLeft: '20px', paddingTop:'10px' }}>
          <a href="/japanese/vocabulary?s=kat-T0TFT">Katakana</a> - a phonetic alphabet mainly used for loan words from other languages. (It has 46 characters)
        </div>
        <div style={{ paddingLeft: '20px', paddingTop:'10px' }}>
        Kanji - a writing system with more than 50,000 characters. The Japanese government has designated 2,136 characters as 'Jōyō kanji' ('daily use kanji').
         High school students are expected to be able to read and write these kanji by the time they graduate.
        </div>
        <a href="/japanese/vocabulary" style={{ paddingTop: '50px', textAlign: 'center' }}>
            Vocabulary
        </a>
      </div>
    </>
  );
}
 
export default Japanese;
