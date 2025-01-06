import './Japanese.scss'

const JapaneseWritingSystems = () => { 
 
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Japanese Writing Systems Explained</h4>
          <div>
          The Japanese language has 3 writing systems:
          </div>
          <div style={{ paddingTop:'10px' }}>
            <a href="/japanese/hiragana-explained">Hiragana</a> - a phonetic writing system used for native japanese words. (It has 46 basic characters)
          </div>
          <div style={{ paddingTop:'10px' }}>
            <a href="/japanese/katakana-explained">Katakana</a> - a phonetic writing system mainly used for loan words from other languages. (It has 46 basic characters)
          </div>
          <div style={{ paddingTop:'10px' }}>
            <a href="/japanese/kanji-explained">Kanji</a> - a non phonetic writing system. (It has over 50,000 characters). 
          </div>
          <div>
        The Japanese government has designated 2,136 characters as 'Jōyō kanji' ('daily use kanji').
        High school students are expected to be able to read and write these kanji by the time they graduate.
          </div>

          <div style={{ paddingTop:'30px' }}>
            Finally <b>Romaji (ローマ字)</b> is the Romanized version of the Japanese writing system. 
        It uses the Latin alphabet to represent Japanese sounds, making it easier for people who are not familiar with Japanese characters 
        (like kanji, hiragana, or katakana) to read and pronounce Japanese words.
          </div>
          <div style={{ paddingTop:'30px', fontFamily: '' }}>
          P.S. Click here to learn <a href="/japanese/how-to-type-japanese">How to Type Japanese</a>.
          </div>
        </div>
      </div>
    </>
  );
}
 
export default JapaneseWritingSystems;
