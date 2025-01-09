const KanjiExplained = () => { 

  const headers = ['Kanji', 'Meaning', 'On’yomi', 'Kun’yomi'];
  const rows: any[] = [
    { Kanji: '火', Meaning: 'Fire', 'On’yomi': 'Ka, Hi', 'Kun’yomi': 'Hi, Ho' },
    { Kanji: '山', Meaning: 'Mountain', 'On’yomi': 'San, Zan', 'Kun’yomi': 'Yama' },
  ];

  return (
    <div className='max-w-screen-md mx-auto px-2'>
      <h4 className='text-center text-2xl py-12'>Kanji Explained</h4>
      <div className='py-2'>
            Kanji are characters used in the Japanese writing system,originally
            borrowed from Chinese characters. They represent ideas or meanings
            rather than just sounds. Each kanji can have multiple meanings and
            pronunciations depending on the context.
      </div>
      <div className='py-2'>
        <div>
          Kanji usually have two types of readings:
        </div>
        <div>
          <b>On’yomi:</b> Based on the original Chinese pronunciation.
        </div>
        <div>
          <b>Kun’yomi:</b> The native Japanese pronunciation.
        </div>
      </div>
      <div className='py-2'>
          Here are some examples:     
        <table className="table-auto border-collapse border border-black w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              {headers.map((header, index) => (
                <th key={index} className="border border-black px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex} className="border border-black px-4 py-2">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='py-2'>
        <div>
          Moreover kanji combine with other kanji, hiragana, or katakana to form words.
        </div>
        <div>
          For example: <b>火</b> (fire) + <b>山</b> (mountain) = <b>火山</b> (volcano).
        </div>
      </div>
      <div>
        Having said that at LingoCommand we strongly recommend you
        avoid spending too much time studying kanji in isolation.
        Instead we suggest you learn Japanese vocabulary which will 
        allow you to naturally gain familiarity with kanji over time.
      </div>        
    </div>
  );
}
 
export default KanjiExplained;
