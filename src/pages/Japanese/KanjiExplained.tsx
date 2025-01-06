import './Japanese.scss'

const KanjiExplained = () => { 

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4>Kanji Explained</h4>
          <div >
            Kanji are characters used in the Japanese writing system, originally borrowed from Chinese characters. 
            They represent ideas or meanings rather than just sounds. 
            Each kanji can have multiple meanings and pronunciations depending on the context.
          </div>
          <div>
            Kanji usually have two types of readings:
            <div>
              <b>On’yomi:</b> Based on the original Chinese pronunciation.
            </div>
            <div>
              <b>Kun’yomi:</b> The native Japanese pronunciation.
            </div>
            <div>
              Here are some examples: 
              
              <table>
                <thead>
                  <tr>
                    <th>Kanji</th>
                    <th>Meaning</th>
                    <th>On’yomi</th>
                    <th>Kun’yomi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>火</td>
                    <td>Fire</td>
                    <td>Ka, Hi</td>
                    <td>Hi, Ho</td>
                  </tr>
                  <tr>
                    <td>山</td>
                    <td>Mountain</td>
                    <td>San, Zan</td>
                    <td>Yama</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
            Moreover kanji combine with other kanji, hiragana, or katakana to form words.
            </div>
            <div>
              For example: <b>火</b> (fire) + <b>山</b> (mountain) = <b>火山</b> (volcano)."
            </div>

          </div>
          <div>
            Having said that at LingoCommand we strongly recommend you avoid spending too much time studying kanji in isolation. Instead we suggest you learn Japanese vocabulary 
            which will allow you to naturally gain familiarity with kanji over time.
          </div>
         
        </div>
      </div>
    </>
  );
}
 
export default KanjiExplained;
