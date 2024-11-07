import './Japanese.scss'

const JapaneseWritingSystems = () => { 
 
  return (
    <>
      <div className="japanese-container">
        <div>
          The Japanese language has 3 writing systems:
        </div>
        <div style={{ paddingLeft: '20px', paddingTop:'10px' }}>
          <a href="/japanese/writing-systems?s=hir-T0TFT">Hiragana</a> - a phonetic writing system used for native japanese words. (It has 46 characters)
        </div>
        <div style={{ paddingLeft: '20px', paddingTop:'10px' }}>
          <a href="/japanese/writing-systems?s=kat-T0TFT">Katakana</a> - a phonetic writing system mainly used for loan words from other languages. (It has 46 characters)
        </div>
        <div style={{ paddingLeft: '20px', paddingTop:'10px' }}>
          <a href="/japanese/writing-systems?s=kanji_grade1-T0TFT">Kanji</a> - a non phonetic writing system. (It has over 50,000 characters). 
        </div>
        <div style={{ paddingLeft: '20px' }}>
        The Japanese government has designated 2,136 characters as 'Jōyō kanji' ('daily use kanji').
        High school students are expected to be able to read and write these kanji by the time they graduate.
        </div>
      </div>
    </>
  );
}
 
export default JapaneseWritingSystems;
